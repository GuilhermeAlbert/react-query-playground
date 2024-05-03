import { EnvironmentKeys } from "@/app/enums/environment.enum";
import { ContentTypes, ResponseHeaders } from "@/app/enums/http.enum";
import { StorageKeys } from "@/app/enums/storage.enum";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { EncryptStorage } from "encrypt-storage";

export const BEARER_TOKEN_PREFIX: string = "Bearer ";
export const DEFAULT_PAGINATION_LIMIT: number = 10;
export const API_PREFIX: string = "/api/v1";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: String(EnvironmentKeys.ApiBaseUrl),
  headers: {
    [ResponseHeaders.ContentType]: ContentTypes.Json,
  },
});

const requestsInterceptor = async (
  requestConfig: AxiosRequestConfig
): Promise<AxiosRequestConfig> => {
  // const encryptStorage = new EncryptStorage(
  //   String(EnvironmentKeys.EncryptStorageSecretKey)
  // );
  // const bearerToken = await encryptStorage.getItem(StorageKeys.AccessToken);

  // if (bearerToken && requestConfig.headers) {
  //   requestConfig.headers.Authorization = `${BEARER_TOKEN_PREFIX}${bearerToken}`;
  // }

  return requestConfig;
};

axiosInstance.interceptors.request.use(requestsInterceptor as any, (error) =>
  Promise.reject(error)
);

export default axiosInstance;
