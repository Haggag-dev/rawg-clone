import { GameQuery } from "../App";
import APIClient from "./apiClient";
import { PlatformDetails } from "./platformService";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: PlatformDetails }[];
  metacritic: number;
  rating: number;
}

const gameService = (pageParam?: number, gameQuery?: GameQuery) =>
  new APIClient<Game>("/games", {
    params: {
      genres: gameQuery?.genre?.id,
      parent_platforms: gameQuery?.platform?.id,
      ordering: gameQuery?.order?.slug,
      search: gameQuery?.search,
      page: pageParam,
    },
  });

export default gameService;
