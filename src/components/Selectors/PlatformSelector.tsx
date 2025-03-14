import { PlatformDetails } from "../../hooks/usePlatforms";
import usePlatforms from "../../hooks/usePlatforms";
import Selector from "./Selector";

interface Props {
  selectedPlatform: PlatformDetails | null;
  setSelectedPlatform: (platform: PlatformDetails) => void;
}

const PlatformSelector = ({ selectedPlatform, setSelectedPlatform }: Props) => {
  const { data } = usePlatforms();

  return (
    <Selector
      buttonName={selectedPlatform?.name || "Platform"}
      data={data?.results}
      setState={(platform: PlatformDetails) => setSelectedPlatform(platform)}
    />
  );
};

export default PlatformSelector;
