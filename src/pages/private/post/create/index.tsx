import { Post } from "@/app/entities/post.entity";
import { AppRoutes } from "@/app/enums/app-route.enum";
import { FieldNames } from "@/app/enums/field-name.enum";
import { QueryTypes } from "@/app/enums/react-query.enum";
import { useCreateOrUpdateProductPost } from "@/app/queries/post.query";
import {
  dispatchErrorToastMessage,
  dispatchSuccessToastMessage,
} from "@/configuration/toast.configuration";
import { PrimaryButton } from "@/resources/components/buttons/primary";
import { TextInput } from "@/resources/components/form/inputs/text";
import { Header } from "@/resources/components/header";
import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { FormikProps, useFormik } from "formik";
import {
  Location,
  NavigateFunction,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { CreatePostYupFormSchema } from "./schema.yup";
import { CreatePostFormData } from "./types";

export default function CreatePostPage(): JSX.Element {
  const { mutateAsync: createOrUpdatePost } = useCreateOrUpdateProductPost();
  const queryClient: QueryClient = useQueryClient();

  const location: Location = useLocation();

  const postId: number | undefined = location.state?.postId;
  const postName: string | undefined = location.state?.postName;

  const navigate: NavigateFunction = useNavigate();

  const initialValues: CreatePostFormData = {
    [FieldNames.Title]: postName ?? "",
  };

  const formik: FormikProps<CreatePostFormData> = useFormik<CreatePostFormData>(
    {
      initialValues,
      onSubmit: handleSubmit,
      validationSchema: CreatePostYupFormSchema,
      validateOnChange: false,
      validateOnBlur: true,
    }
  );

  /**
   * @returns {Promise<void>}
   */
  async function handleSubmit(data: CreatePostFormData): Promise<void> {
    await createOrUpdatePost(
      { data: data as Post, postId },
      {
        onSuccess: ({ data }, { postId }) => {
          const queryKey = [QueryTypes.Posts];

          if (postId) {
            queryClient.setQueryData(queryKey, (oldData?: Post[]) => {
              return oldData?.map((post) => (post.id === postId ? data : post));
            });
          } else {
            queryClient.setQueryData(queryKey, (oldData?: Post[]) => {
              return [...(oldData ?? []), data];
            });
          }

          dispatchSuccessToastMessage(
            `Categoria ${postId ? "atualizada" : "criada"} com sucesso!`
          );

          navigate(AppRoutes.Posts);
        },
        onError: (err: any, { postId }) => {
          dispatchErrorToastMessage(
            `Erro ao tentar ${postId ? "atualizar" : "criar"} a post!`
          );
          console.error(err.message);
        },
      }
    );
  }

  return (
    <>
      <Header title={postId ? "Editar post" : "Novo post"} />

      <div className="bg-white dark:bg-slate-800 px-8 py-8 border-t border-slate-200 dark:border-slate-700">
        <form autoComplete="off" onSubmit={formik.handleSubmit} noValidate>
          <div className="grid gap-5">
            <TextInput
              label={"Nome da post"}
              id={FieldNames.Title}
              name={FieldNames.Title}
              value={formik.values[FieldNames.Title]}
              onChange={formik.handleChange(FieldNames.Title)}
              required={true}
              disabled={formik.isSubmitting}
              type={"text"}
              error={formik.errors[FieldNames.Title]}
            />
          </div>

          <div className="flex justify-end pt-8">
            <PrimaryButton
              title={postId ? "Salvar" : "Adicionar"}
              type="submit"
            />
          </div>
        </form>
      </div>
    </>
  );
}
