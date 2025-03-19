import useScreenshots from "../../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  console.log(data);
  return <div>GameScreenshots</div>;
};

export default GameScreenshots;
