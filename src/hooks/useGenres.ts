import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GENRES } from "../constants";
import genres from "../data/genres";
import { FetchResponse } from "../services/apiClient";
import genreService, { Genre } from "../services/genreService";
import ms from "ms";

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: CACHE_KEY_GENRES,
    queryFn: genreService.getAll,
    staleTime: ms("1d"),
    initialData: genres,
  });

export default useGenres;
