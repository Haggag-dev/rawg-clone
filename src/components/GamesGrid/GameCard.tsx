import { Game } from "../../hooks/useGames";
import CriticScore from "./CriticScore";
import PlatformIconsList from "./PlatformIconsList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div className="px-3 mb-3">
      <img
        className="rounded-t-sm"
        src={game.background_image}
        alt={`${game.name} Image`}
      />
      <div className="bg-[#202020] p-4 rounded-b-sm">
        <div className="flex justify-between font-bold">
          <PlatformIconsList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />

          <CriticScore score={game.metacritic} />
        </div>
        <p className="text-xl font-bold ">{game.name}</p>
      </div>
    </div>
  );
};

export default GameCard;
