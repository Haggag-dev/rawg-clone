import { PlatformDetails } from "../../hooks/useGames";
import useParentPlatforms from "../../hooks/useParentPlatforms";
import Selector from "./Selector";

interface Props {
  selectedPlatform: PlatformDetails | null;
  setSelectedPlatform: (platform: PlatformDetails) => void;
}

const PlatformSelector = ({ selectedPlatform, setSelectedPlatform }: Props) => {
  const { data } = useParentPlatforms();

  return (
    <Selector
      buttonName={selectedPlatform?.name || "Platform"}
      data={data}
      setState={(platform: PlatformDetails) => setSelectedPlatform(platform)}
    />
  );
};

export default PlatformSelector;
