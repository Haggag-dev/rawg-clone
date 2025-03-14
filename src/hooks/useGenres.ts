import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GENRES } from "../constants";
import { FetchResponse } from "../services/apiClient";
import genreService, { Genre } from "../services/genreService";

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: CACHE_KEY_GENRES,
    queryFn: genreService.getAll,
    staleTime: 30 * 1000 * 60, // Should I increase it?
  });

export default useGenres;
