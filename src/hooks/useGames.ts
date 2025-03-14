import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { CACHE_KEY_GAMES } from "../constants";
import { FetchResponse } from "../services/apiClient";
import gameService, { Game } from "../services/gameService";

const useGames = (gameQuery: GameQuery | null) => {
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: [...CACHE_KEY_GAMES, gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      gameService(pageParam, gameQuery || undefined).getAll(),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.next ? allPages.length + 1 : undefined,
    staleTime: 30 * 1000 * 60,
  });
};

export default useGames;
