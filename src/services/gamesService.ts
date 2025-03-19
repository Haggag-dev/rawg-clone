import { GameQuery } from "../stores/gameQueryStore";
import APIClient from "./apiClient";
import Game from "../entities/Game";
import { getOptionData } from "../utils/orderOptions";

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
