import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { CACHE_KEY_TRAILERS } from "../constants";
import Trailer from "../entities/Trailer";
import { FetchResponse } from "../services/apiClient";
import trailerService from "../services/trailersService";

const useTrailers = (gameId: number) =>
  useQuery<FetchResponse<Trailer>, Error>({
    queryKey: [...CACHE_KEY_TRAILERS, gameId],
    queryFn: trailerService(gameId).getAll,
    staleTime: ms("1d"),
  });

export default useTrailers;
