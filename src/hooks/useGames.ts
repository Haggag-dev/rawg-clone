import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import { CACHE_KEY_GAMES } from "../constants";
import { FetchResponse } from "../services/apiClient";
import gameService from "../services/gamesService";
import Game from "../entities/Game";
import useGameQueryStore from "../stores/gameQueryStore";

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: [...CACHE_KEY_GAMES, gameQuery],
    queryFn: ({ pageParam = 1 }) => gameService(gameQuery, pageParam).getAll(),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.next ? allPages.length + 1 : undefined,
    staleTime: ms("1 h"),
  });
};

export default useGames;
