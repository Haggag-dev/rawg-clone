import { useParams } from "react-router-dom";

const GameDetails = () => {
  const params = useParams();

  return <div>GameDetails {params.id}</div>;
};

export default GameDetails;
