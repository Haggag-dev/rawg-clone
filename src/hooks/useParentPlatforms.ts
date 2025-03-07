import useData from "./useData";
import { PlatformDetails } from "./useGames";

const useParentPlatforms = () =>
  useData<PlatformDetails>("/platforms/lists/parents");

export default useParentPlatforms;
