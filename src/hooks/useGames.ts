import useData from "./useData";

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

const useGames = (genreId?: number) =>
  useData<Game>("/games", { params: { genres: genreId } }, [genreId]);

export default useGames;
