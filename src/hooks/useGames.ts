import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { CACHE_KEY_GAMES } from "../constants";
import { FetchResponse } from "../services/apiClient";
import gameService, { Game } from "../services/gameService";

const useGames = (gameQuery: GameQuery | null) => {
  return useQuery<FetchResponse<Game>, Error>({
    queryKey: [...CACHE_KEY_GAMES, gameQuery],
    queryFn: gameService(gameQuery || undefined).getAll,
    staleTime: 30 * 1000 * 60,
  });
};

export default useGames;
