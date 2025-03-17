import { useQuery } from "@tanstack/react-query";
import gameDetailsService, {
  GameDetails,
} from "../services/gameDetailsService";
import ms from "ms";

const useGameDetails = (slug: string) => {
  return useQuery<GameDetails, Error>({
    queryKey: ["game-details", slug],
    queryFn: gameDetailsService(slug).get,
    staleTime: ms("1 h"),
  });
};
export default useGameDetails;
