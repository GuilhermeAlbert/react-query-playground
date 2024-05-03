import axiosInstance from "@/configuration/axios.configuration";
import { CreatePostFormData } from "@/pages/private/post/create/types";
import { AxiosResponse } from "axios";
import { Post } from "../entities/post.entity";
import { ApiEndpointRoutes } from "../enums/api-endpoint.enum";

export function getEndpointRouteName(): string {
  return `${ApiEndpointRoutes.EstablishmentPosts}`;
}

export async function getProductPosts(): Promise<AxiosResponse<Post[]>> {
  return axiosInstance
    .get(ApiEndpointRoutes.EstablishmentPosts)
    .catch((error: any) => {
      throw error;
    });
}

export async function createProductPost(
  data: CreatePostFormData
): Promise<AxiosResponse<Post>> {
  return axiosInstance
    .post(ApiEndpointRoutes.EstablishmentPosts, data)
    .catch((error: any) => {
      throw error;
    });
}

export async function updateProductPost(
  postId: number,
  data: CreatePostFormData
): Promise<AxiosResponse<Post>> {
  return axiosInstance
    .patch(`${ApiEndpointRoutes.EstablishmentPosts}/${postId}`, data)
    .catch((error: any) => {
      throw error;
    });
}

export async function deleteProductPost(
  postId: number
): Promise<AxiosResponse<void>> {
  return axiosInstance
    .get(`${ApiEndpointRoutes.EstablishmentPosts}/${postId}`)
    .catch((error: any) => {
      throw error;
    });
}
