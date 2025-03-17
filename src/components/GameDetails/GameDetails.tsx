import { useParams } from "react-router-dom";
import useGameDetails from "../../hooks/useGameDetails";

const GameDetails = () => {
  const params = useParams();

  const { data } = useGameDetails(params.slug as string);

  return <div>{data?.description_raw}</div>;
};

export default GameDetails;
