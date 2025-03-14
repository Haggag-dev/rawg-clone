import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/apiClient";

export interface PlatformDetails {
  id: number;
  name: string;
  slug?: string;
}

const usePlatforms = () =>
  useQuery<FetchResponse<PlatformDetails>, Error>({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient.get("/platforms/lists/parents").then((res) => res.data),
  });

export default usePlatforms;
