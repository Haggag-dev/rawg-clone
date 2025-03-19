import Trailer  from "../entities/Trailer";
import APIClient from "./apiClient";

const trailerService = (gameId: number) =>
  new APIClient<Trailer>(`/games/${gameId}/movies`);

export default trailerService;
