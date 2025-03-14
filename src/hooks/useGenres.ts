import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../services/apiClient";
import genreService, { Genre } from "../services/genreService";

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: genreService.getAll,
    staleTime: 30 * 1000 * 60, // Should I increase it?
  });

export default useGenres;
