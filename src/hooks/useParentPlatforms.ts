import useData from "./useData";

export interface ParentPlatforms {
  id: number;
  name: string;
}

const useParentPlatforms = () =>
  useData<ParentPlatforms>("/platforms/lists/parents");

export default useParentPlatforms;
