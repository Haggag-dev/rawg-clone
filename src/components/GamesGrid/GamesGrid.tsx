import { GameQuery } from "../../App";
import useGames from "../../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  dark: boolean;
  gameQuery: GameQuery | null;
}

const GamesGrid = ({ dark, gameQuery }: Props) => {
  const { data, error, loading } = useGames(gameQuery);
  const skeletonKeys = [0, 1, 2, 3, 4, 5, 6, 7];

  if (error)
    return <p className="ml-3 text-4xl text-red-500 font-bold">{error}</p>;

  return (
    <section className="grid auto-rows-fr items-stretch gap-y-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-4">
      {loading
        ? skeletonKeys.map((skeletonKey) => (
            <GameCardSkeleton key={skeletonKey} />
          ))
        : data.map((game) => (
            <GameCard key={game.id} game={game} dark={dark} />
          ))}
    </section>
  );
};

export default GamesGrid;
