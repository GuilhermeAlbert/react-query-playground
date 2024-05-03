import { Post } from "@/app/entities/post.entity";
import { AppRoutes } from "@/app/enums/app-route.enum";
import { ModalTypes } from "@/app/enums/modal-type.enum";
import {
  useDeleteProductPost,
  useGetProductPosts,
} from "@/app/queries/post.query";
import { IconButton } from "@/resources/components/buttons/icon";
import {
  AddIcon,
  DeleteIcon,
  EditIcon,
} from "@/resources/components/buttons/primary";
import { DangerDecision } from "@/resources/components/decisions/danger";
import { Fetching } from "@/resources/components/fetching";
import { Header } from "@/resources/components/header";
import { Table } from "@/resources/components/table";
import { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { tableColumns } from "./constants";

export default function PostsPage(): JSX.Element {
  const navigate: NavigateFunction = useNavigate();

  const { mutateAsync: deletePost } = useDeleteProductPost();
  const { isLoading, data } = useGetProductPosts();
  const posts: Post[] = data ?? [];

  const [selectedItemId, setSelectedItemId] = useState<number>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  async function handlePostDelete(): Promise<void> {
    if (selectedItemId) {
      try {
        await deletePost(selectedItemId);

        setIsModalOpen(false);
      } catch (error) {
        console.error("Erro ao deletar a post", error);
      }
    }
  }

  function onCreateClick(): void {
    navigate(AppRoutes.CreatePost);
  }

  function onUpdateClick(state: { postId: number; postName: string }): void {
    navigate(AppRoutes.CreatePost, {
      state,
    });
  }

  function onDeleteClick(postId: number): void {
    setIsModalOpen(true);
    setSelectedItemId(postId);
  }

  return (
    <>
      <Header
        title="Posts"
        endActions={{
          buttonProps: {
            startIcon: <AddIcon />,
            title: "Criar post",
            type: "button",
            onClick: onCreateClick,
          },
        }}
      />

      {isLoading ? (
        <Fetching title="Carregando Posts" />
      ) : (
        <Table
          title={"Posts"}
          itemsLength={posts.length}
          enableActions
          items={posts.map((post) => ({
            id: String(post.id),
            title: post.title,
            actions: (
              <>
                <IconButton
                  title={"Editar"}
                  icon={<EditIcon />}
                  type={"button"}
                  onClick={() =>
                    onUpdateClick({
                      postId: post.id,
                      postName: post.title,
                    })
                  }
                />
                <IconButton
                  className="text-rose-500 hover:text-rose-600 rounded-full"
                  title={"Deletar"}
                  icon={<DeleteIcon />}
                  type={"button"}
                  aria-controls={ModalTypes.Danger}
                  onClick={(e) => {
                    e.stopPropagation();
                    onDeleteClick(post.id);
                  }}
                />
              </>
            ),
          }))}
          columns={tableColumns}
        />
      )}

      <DangerDecision
        modalOpen={isModalOpen}
        setModalOpen={setIsModalOpen}
        title={"Deletar 1 item?"}
        description="Quer realmente excluir o item?"
        cancelTitle="Cancelar"
        confirmTitle="Confirmar"
        onCancelClick={() => setIsModalOpen(false)}
        onConfirmClick={handlePostDelete}
      />
    </>
  );
}
