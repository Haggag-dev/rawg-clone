import { GameQuery } from "../stores/gameQueryStore";
import APIClient from "./apiClient";
import { getOptionData } from "./orderOptions";
import { PlatformDetails } from "./platformService";

export interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  parent_platforms: { platform: PlatformDetails }[];
  metacritic: number;
  rating: number;
}

const gameService = (gameQuery: GameQuery, pageParam?: number) => {
  const { slug } = getOptionData(gameQuery?.orderId || 0);

  return new APIClient<Game>("/games", {
    params: {
      genres: gameQuery?.genreId,
      parent_platforms: gameQuery?.platformId,
      ordering: slug,
      search: gameQuery?.searchString,
      page: pageParam,
    },
  });
};

export default gameService;
