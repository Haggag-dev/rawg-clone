import { GameQuery } from "../App";
import useData from "./useData";

export interface PlatformDetails {
  id: number;
  name: string;
  slug?: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: PlatformDetails }[];
  metacritic: number;
  rating: number;
}

const useGames = (gameQuery: GameQuery | null) => {
  return useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery?.genre?.id,
        platforms: gameQuery?.platform?.id,
      },
    },
    [gameQuery]
  );
};

export default useGames;
