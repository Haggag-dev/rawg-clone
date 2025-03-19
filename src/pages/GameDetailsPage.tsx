import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import Spinner from "../components/ui/Spinner";
import ExpandableText from "../components/ui/ExpandableText";
import GameAttributes from "../components/GameDetails/GameAttributes";
import GameTrailer from "../components/GameDetails/GameTrailer";
import GameScreenshots from "../components/GameDetails/GameScreenshots";

const GameDetails = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGameDetails(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <main className="mx-5 flex flex-col gap-y-4 mb-10 col-span-2">
      <div className="mb-4">
        <h1 className="text-4xl font-bold mb-2">{game.name}</h1>
        <ExpandableText text={game.description_raw} limit={300} />
      </div>

      <GameAttributes game={game} />

      <GameTrailer gameId={game.id} />

      <GameScreenshots gameId={game.id} />
    </main>
  );
};

export default GameDetails;
