"use client";

import { UndefinedInitialDataOptions, useQuery } from "@tanstack/react-query";
import api from "../services/api";

interface UseGetOptions<T> {
  url: string;
  options?: UndefinedInitialDataOptions<T, Error, T, readonly unknown[]>;
}

export function useGet<T>({ url, options }: UseGetOptions<T>) {
  return useQuery<T>({
    queryKey: [url],
    queryFn: async () => {
      const { data } = await api.get<T>(url);
      return data;
    },
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    ...options,
  });
}
