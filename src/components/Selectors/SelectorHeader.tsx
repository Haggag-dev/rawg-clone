import useGenres from "../../hooks/useGenres";
import usePlatforms from "../../hooks/usePlatforms";
import capitalizeFirstLetter from "../../services/capitalizeFirstLetter";
import getObjectName from "../../services/getObjectName";
import useGameQueryStore from "../../stores/gameQueryStore";

const SelectorHeader = () => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);

  return (
    <h2 className="text-5xl ml-3 mb-7 font-bold">
      {platformId || genreId
        ? capitalizeFirstLetter(
            getObjectName(platformId, platforms?.results) || ""
          ) +
          " " +
          capitalizeFirstLetter(getObjectName(genreId, genres?.results) || "") +
          " "
        : "All "}
      Games
    </h2>
  );
};

export default SelectorHeader;
