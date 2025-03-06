import useData from "./useData";
import { Genre } from "./useGenres";

export interface PlatformDetails {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: PlatformDetails }[];
  metacritic: number;
  rating: number;
}

const useGames = (genre: Genre | null) => {
  return useData<Game>("/games", { params: { genres: genre?.id } }, [
    genre?.id,
  ]);
};

export default useGames;
