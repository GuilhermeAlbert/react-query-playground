import {
  dispatchErrorToastMessage,
  dispatchSuccessToastMessage,
} from "@/configuration/toast.configuration";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError, AxiosResponse, HttpStatusCode } from "axios";
import { Post } from "../entities/post.entity";
import { CacheMillisecondExpirations } from "../enums/cache-expiration.enum";
import { QueryTypes } from "../enums/react-query.enum";
import {
  createProductPost,
  deleteProductPost,
  getProductPosts,
  updateProductPost,
} from "../services/post.service";

export function useGetProductPosts() {
  return useQuery<Post[]>({
    queryKey: [QueryTypes.Posts],
    queryFn: async () => {
      const requestResponse: AxiosResponse<Post[]> = await getProductPosts();

      if (requestResponse.status === HttpStatusCode.Ok) {
        return requestResponse.data;
      }

      return [];
    },
    staleTime: CacheMillisecondExpirations.TwentyFourHours,
  });
}

export function useCreateOrUpdateProductPost() {
  return useMutation({
    mutationFn: async ({ data, postId }: { data: Post; postId?: number }) => {
      return postId
        ? await updateProductPost(postId, data)
        : await createProductPost(data);
    },
  });
}

export function useDeleteProductPost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (postId: number) => {
      await deleteProductPost(postId);
    },
    onSuccess: (data, variables) => {
      const queryKey = [QueryTypes.Posts];
      queryClient.setQueryData(queryKey, (oldData?: any[]) => {
        return oldData?.filter((post) => post.id !== variables);
      });

      dispatchSuccessToastMessage("Categoria excluída com sucesso!");
    },
    onError: (err: AxiosError) => {
      dispatchErrorToastMessage("Erro ao tentar excluir a post!");
      console.error(err.message);
    },
  });
}
