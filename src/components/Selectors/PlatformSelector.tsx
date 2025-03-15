import usePlatforms from "../../hooks/usePlatforms";
import getObjectName from "../../services/getObjectName";
import Selector from "./Selector";

interface Props {
  selectedPlatform: number;
  setSelectedPlatform: (platformId: number) => void;
}

const PlatformSelector = ({ selectedPlatform, setSelectedPlatform }: Props) => {
  const { data } = usePlatforms();

  return (
    <Selector
      buttonName={getObjectName(selectedPlatform, data?.results) || "Platform"}
      data={data?.results}
      setState={(platformId: number) => setSelectedPlatform(platformId)}
    />
  );
};

export default PlatformSelector;
