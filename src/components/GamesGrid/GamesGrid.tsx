import useGames from "../../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  dark: boolean;
}

const GamesGrid = ({ dark }: Props) => {
  const { data, error, loading } = useGames();
  const skeletonKeys = [0, 1, 2, 3, 4, 5, 6, 7];

  return (
    <>
      {error && <p className="text-red-500">{error}</p>}
      <section className="grid auto-rows-fr items-stretch gap-y-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-4">
        {loading
          ? skeletonKeys.map((skeletonKey) => (
              <GameCardSkeleton key={skeletonKey} />
            ))
          : data.map((game) => (
              <GameCard key={game.id} game={game} dark={dark} />
            ))}
      </section>
    </>
  );
};

export default GamesGrid;
