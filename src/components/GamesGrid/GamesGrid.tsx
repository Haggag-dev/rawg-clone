import useGames from "../../hooks/useGames";

const GamesGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <p>{error}</p>}
      <ul>
        {games.map((game) => (
          <p key={game.id}>{game.name}</p>
        ))}
      </ul>
    </>
  );
};

export default GamesGrid;
