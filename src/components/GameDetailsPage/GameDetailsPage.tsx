import { useParams } from "react-router-dom";

const GameDetailsPage = () => {
  const params = useParams();

  return <div>GameDetails {params.id}</div>;
};

export default GameDetailsPage;
