import { useParams } from "react-router-dom";
import useGameDetails from "../../hooks/useGameDetails";
import Spinner from "../ui/Spinner";

const GameDetails = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGameDetails(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <div className="col-span-2 px-3">
      <h1 className="text-4xl font-bold mb-3">{game.name}</h1>
      <p className="text-justify">{game.description_raw}</p>
    </div>
  );
};

export default GameDetails;
