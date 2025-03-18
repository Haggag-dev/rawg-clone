import { Genre } from "./Genre";
import { PlatformDetails } from "./PlatformDetails";
import { Publisher } from "./Publisher";

export interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  publishers: Publisher[];
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: PlatformDetails }[];
  metacritic: number;
  rating: number;
}
