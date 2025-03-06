import useGames from "../../hooks/useGames";
import GameCard from "./GameCard";

interface Props {
  dark: boolean;
}

const GamesGrid = ({ dark }: Props) => {
  const { games, error } = useGames();

  return (
    <>
      {error && <p>{error}</p>}
      <section className="grid auto-rows-fr items-stretch gap-y-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-4">
        {games.map((game) => (
          <GameCard key={game.id} game={game} dark={dark} />
        ))}
      </section>
    </>
  );
};

export default GamesGrid;
