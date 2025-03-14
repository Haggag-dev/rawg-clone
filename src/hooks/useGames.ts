import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient, { FetchResponse } from "../services/apiClient";
import { PlatformDetails } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: PlatformDetails }[];
  metacritic: number;
  rating: number;
}

const useGames = (gameQuery: GameQuery | null) => {
  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get("/games", {
          params: {
            genres: gameQuery?.genre?.id,
            parent_platforms: gameQuery?.platform?.id,
            ordering: gameQuery?.order?.slug,
            search: gameQuery?.search,
          },
        })
        .then((res) => res.data),
    staleTime: 30 * 1000 * 60,
  });

  // return useData<Game>(
  //   "/games",
  //   {
  //     params: {
  //       genres: gameQuery?.genre?.id,
  //       platforms: gameQuery?.platform?.id,
  //       ordering: gameQuery?.order?.slug,
  //       search: gameQuery?.search,
  //     },
  //   },
  //   [gameQuery]
  // );
};

export default useGames;
