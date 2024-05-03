import { CacheMillisecondExpirations } from "../enums/cache-expiration.enum";

export interface CachedData {
  timestamp: number;
  data: any;
}

export function useCache() {
  function getCachedData(
    cacheKey: string,
    cacheExpiration: number = CacheMillisecondExpirations.ThirtySeconds
  ): CachedData | undefined {
    const cachedData: string | null = localStorage.getItem(cacheKey);

    if (cachedData) {
      const parsedCachedData: CachedData = JSON.parse(cachedData);

      if (Date.now() - parsedCachedData.timestamp < cacheExpiration) {
        const parsedData: CachedData = {
          timestamp: parsedCachedData.timestamp,
          data: parsedCachedData.data,
        };

        return parsedData;
      }
    }

    return undefined;
  }

  function setCachedData(cacheKey: string, data: any): void {
    const cachedData: CachedData = {
      timestamp: Date.now(),
      data,
    };

    localStorage.setItem(cacheKey, JSON.stringify(cachedData));
  }

  return {
    getCachedData,
    setCachedData,
  };
}
