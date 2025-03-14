import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_PLATFORMS } from "../constants";
import { FetchResponse } from "../services/apiClient";
import platformService, { PlatformDetails } from "../services/platformService";

const usePlatforms = () =>
  useQuery<FetchResponse<PlatformDetails>, Error>({
    queryKey: CACHE_KEY_PLATFORMS,
    queryFn: platformService.getAll,
    staleTime: 30 * 1000 * 60,
  });

export default usePlatforms;
