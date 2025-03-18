import { Link } from "react-router-dom";
import { Game } from "../../entities/Game";
import getCroppedImageUrl from "../../services/imageUrl";
import CriticScore from "./CriticScore";
import CriticScoreIcon from "./CriticScoreIcon";
import PlatformIconsList from "./PlatformIconsList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div className="px-3 mb-3 flex flex-col h-full overflow-hidden hover:scale-103 transition-transform ease-in duration-150">
      <img
        className="rounded-t-lg object-cover"
        src={getCroppedImageUrl(game.background_image)}
        alt={`${game.name} Image`}
      />
      <div className="bg-gray-200 dark:bg-[#202020] p-4 rounded-b-lg grow-1 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <PlatformIconsList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />

          {game.metacritic ? <CriticScore score={game.metacritic} /> : null}
        </div>
        <Link
          to={`/games/${game.slug}`}
          className="text-2xl font-bold mt-3 text-start grow-1 hover:underline"
        >
          {game.name} <CriticScoreIcon score={game.rating} />
        </Link>
      </div>
    </div>
  );
};

export default GameCard;
