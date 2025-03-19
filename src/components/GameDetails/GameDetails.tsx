import { useParams } from "react-router-dom";
import useGameDetails from "../../hooks/useGameDetails";
import ExpandableText from "../ui/ExpandableText";
import Spinner from "../ui/Spinner";
import GameAttributes from "./GameAttributes";
import GameTrailer from "./GameTrailer";
import GameScreenshots from "./GameScreenshots";

const GameDetails = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGameDetails(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <div className="mb-4">
        <h1 className="text-4xl font-bold mb-2">{game.name}</h1>
        <ExpandableText text={game.description_raw} limit={300} />
      </div>

      <GameAttributes game={game} />

      <GameTrailer gameId={game.id} />

      <GameScreenshots gameId={game.id} />
    </>
  );
};

export default GameDetails;
