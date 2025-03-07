import useParentPlatforms from "../../hooks/useParentPlatforms";
import Selector from "./Selector";

const PlatformSelector = () => {
  const { data } = useParentPlatforms();

  return <Selector buttonName={"Platform"} data={data} />;
};

export default PlatformSelector;
