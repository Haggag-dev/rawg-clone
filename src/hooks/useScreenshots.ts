import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { CACHE_KEY_SCREENSHOTS } from "../constants";
import Screenshot from "../entities/Screenshot";
import { FetchResponse } from "../services/apiClient";
import screenshotsService from "../services/screenshotsService";

const useScreenshots = (gameId: number) =>
  useQuery<FetchResponse<Screenshot>, Error>({
    queryKey: [...CACHE_KEY_SCREENSHOTS, gameId],
    queryFn: screenshotsService(gameId).getAll,
    staleTime: ms("1d"),
  });

export default useScreenshots;
