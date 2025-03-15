import { GameQuery } from "../../App";
import useGenres from "../../hooks/useGenres";
import usePlatforms from "../../hooks/usePlatforms";
import capitalizeFirstLetter from "../../services/capitalizeFirstLetter";
import getObjectName from "../../services/getObjectName";

interface Props {
  gameQuery: GameQuery;
}

const SelectorHeader = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  return (
    <h2 className="text-5xl ml-3 mb-7 font-bold">
      {gameQuery
        ? capitalizeFirstLetter(
            getObjectName(gameQuery.platformId, platforms?.results) || ""
          ) +
          " " +
          capitalizeFirstLetter(
            getObjectName(gameQuery.genreId, genres?.results) || ""
          ) +
          " "
        : "All"}
      Games
    </h2>
  );
};

export default SelectorHeader;
