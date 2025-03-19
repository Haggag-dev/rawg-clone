import APIClient from "./apiClient";
import Game from "../entities/Game";

const gameDetailsService = (slug: string) =>
  new APIClient<Game>(`/games/${slug}`);

export default gameDetailsService;
