import { QueryClient } from "@tanstack/react-query";

export const ReactQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retryOnMount: false,
    },
  },
});
