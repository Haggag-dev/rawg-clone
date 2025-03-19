import useTrailers from "../../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data: trailer } = useTrailers(gameId);
  console.log(trailer?.results);
  return <div>GameTrailer</div>;
};

export default GameTrailer;
