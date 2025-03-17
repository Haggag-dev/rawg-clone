import usePlatforms from "../../../hooks/usePlatforms";
import getObjectName from "../../../services/getObjectName";
import useGameQueryStore from "../../../stores/gameQueryStore";
import Selector from "./Selector";

const PlatformSelector = () => {
  const { data } = usePlatforms();

  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setSelectedPlatform = useGameQueryStore((s) => s.setPlatformId);

  return (
    <Selector
      buttonName={
        getObjectName(selectedPlatformId, data?.results) || "Platform"
      }
      data={data?.results}
      setState={(platformId: number) => setSelectedPlatform(platformId)}
    />
  );
};

export default PlatformSelector;
