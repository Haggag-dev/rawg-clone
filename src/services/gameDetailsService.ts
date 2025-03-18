import APIClient from "./apiClient";
import { Game } from "./gamesService";

const gameDetailsService = (slug: string) =>
  new APIClient<Game>(`/games/${slug}`);

export default gameDetailsService;
