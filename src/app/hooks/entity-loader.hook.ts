import { DropdownSelectInputItem } from "@/resources/components/form/inputs/dropdown-select/types";
import { AxiosResponse, HttpStatusCode } from "axios";
import { useEffect, useState } from "react";
import { CacheMillisecondExpirations } from "../enums/cache-expiration.enum";
import { StorageKeys } from "../enums/storage.enum";
import { CachedData, useCache } from "./cache.hook";

type FetchFunction<T> = () => Promise<AxiosResponse<T[]>>;

export interface UseEntityLoaderProps<T> {
  fetchFunction: FetchFunction<T>;
  cacheKey: StorageKeys;
  cacheExpiration?: CacheMillisecondExpirations;
  labelField: keyof T;
  valueField: keyof T;
}

export function useEntityLoader<T extends Record<string, any>>({
  fetchFunction,
  cacheKey,
  cacheExpiration = CacheMillisecondExpirations.TwentyFourHours,
  labelField,
  valueField,
}: UseEntityLoaderProps<T>) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [items, setItems] = useState<DropdownSelectInputItem[]>([]);

  const { getCachedData, setCachedData } = useCache();

  useEffect(() => {
    async function bootstrapAsync() {
      let loadedItems: T[] = [];

      try {
        setIsLoading(true);

        const cachedData: CachedData | undefined = getCachedData(
          cacheKey,
          cacheExpiration
        );

        if (cachedData) {
          loadedItems = cachedData.data as T[];
        } else {
          const response = await fetchFunction();

          if (response.status === HttpStatusCode.Ok) {
            loadedItems = response.data;

            setCachedData(cacheKey, loadedItems);
          }
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
        setItems(
          loadedItems.map((item) => ({
            value: item[valueField],
            label: item[labelField],
          }))
        );
      }
    }

    bootstrapAsync();
  }, []);

  return {
    items,
    isLoading,
  };
}
