import { AppRoutes } from "@/app/enums/app-route.enum";
import CreatePostPage from "@/pages/private/post/create";
import PostsPage from "@/pages/private/post/list";
import { Navigate } from "react-router-dom";

export const PrivateRoutes: any[] = [
  {
    path: AppRoutes.Root,
    element: <Navigate to={AppRoutes.Posts} />,
  },
  {
    path: AppRoutes.Posts,
    element: <PostsPage />,
  },
  {
    path: AppRoutes.CreatePost,
    element: <CreatePostPage />,
  },
];
