import useScreenshots from "../../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {data.results.map((screenshot) => (
        <img key={screenshot.id} src={screenshot.image} className="rounded-sm" />
      ))}
    </div>
  );
};

export default GameScreenshots;
