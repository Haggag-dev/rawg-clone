import Screenshot from "../entities/Screenshot";
import APIClient from "./apiClient";

const screenshotsService = (gameId: number) =>
  new APIClient<Screenshot>(`/games/${gameId}/screenshots`);

export default screenshotsService;
