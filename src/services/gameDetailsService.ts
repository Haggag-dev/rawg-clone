import APIClient from "./apiClient";

export interface GameDetails {
  description_raw: string;
}

const gameDetailsService = (slug: string) =>
  new APIClient<GameDetails>(`/games/${slug}`);

export default gameDetailsService;
