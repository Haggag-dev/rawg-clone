import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { FetchResponse } from "../services/apiClient";
import gameService, { Game } from "../services/gameService";

const useGames = (gameQuery: GameQuery | null) => {
  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: gameService(gameQuery || undefined).getAll,
    staleTime: 30 * 1000 * 60,
  });
};

export default useGames;
