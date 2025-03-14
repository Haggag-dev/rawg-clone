import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import { FetchResponse } from "../services/apiClient";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: () => apiClient.get("/genres").then((res) => res.data),
    staleTime: 30 * 1000 * 60, // Should I increase it?
  });

export default useGenres;
