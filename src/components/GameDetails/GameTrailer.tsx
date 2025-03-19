import useTrailers from "../../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const firstResult = data?.results[1];
  return firstResult ? (
    <video controls src={firstResult.data[480]} poster={firstResult.preview} />
  ) : null;
};

export default GameTrailer;
