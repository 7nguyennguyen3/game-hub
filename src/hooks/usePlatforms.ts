import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../services/api-client";
import apiClient from "../services/api-client";
import platforms from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platform"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platform/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
