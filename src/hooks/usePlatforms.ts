import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_PLATFORMS } from "../constants";
import platforms from "../data/platforms";
import { FetchResponse } from "../services/apiClient";
import platformService, { PlatformDetails } from "../services/platformService";

const usePlatforms = () =>
  useQuery<FetchResponse<PlatformDetails>, Error>({
    queryKey: CACHE_KEY_PLATFORMS,
    queryFn: platformService.getAll,
    staleTime: 30 * 1000 * 60,
    initialData: platforms,
  });

export default usePlatforms;
