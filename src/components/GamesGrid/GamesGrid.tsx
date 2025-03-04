import useGames from "../../hooks/useGames";
import GameCard from "./GameCard";

const GamesGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <p>{error}</p>}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </section>
    </>
  );
};

export default GamesGrid;
