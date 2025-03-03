import { useEffect, useState } from "react";
import apiClient from "../../services/apiClient";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  next: string;
  previous: string;
  results: Game[];
}

const GamesGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((error) => setError(error.message));
  });

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
