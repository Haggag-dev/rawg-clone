import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TRAILERS } from "../constants";
import trailerService from "../services/trailerService";
import ms from "ms";

const useTrailers = (gameId: number) =>
  useQuery({
    queryKey: [...CACHE_KEY_TRAILERS, gameId],
    queryFn: trailerService(gameId).getAll,
    staleTime: ms("1d"),
  });

export default useTrailers;
