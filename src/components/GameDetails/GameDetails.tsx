import { useParams } from "react-router-dom";
import useGameDetails from "../../hooks/useGameDetails";
import Spinner from "../ui/Spinner";
import ExpandableText from "../ui/ExpandableText";

const GameDetails = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGameDetails(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <div className="col-span-2 px-3">
      <h1 className="text-4xl font-bold mb-3">{game.name}</h1>
      <ExpandableText description={game.description_raw} limit={300} />
    </div>
  );
};

export default GameDetails;
