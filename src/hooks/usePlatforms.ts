import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../services/apiClient";
import platformService, { PlatformDetails } from "../services/platformService";

const usePlatforms = () =>
  useQuery<FetchResponse<PlatformDetails>, Error>({
    queryKey: ["platforms"],
    queryFn: platformService.getAll,
  });

export default usePlatforms;
