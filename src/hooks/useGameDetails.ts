import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { CACHE_KEY_GAMES } from "../constants";
import gameDetailsService from "../services/gameDetailsService";
import Game from "../entities/Game";

const useGameDetails = (slug: string) => {
  return useQuery<Game, Error>({
    queryKey: [...CACHE_KEY_GAMES, slug],
    queryFn: gameDetailsService(slug).get,
    staleTime: ms("1 h"),
  });
};
export default useGameDetails;
