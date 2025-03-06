import { Game } from "../../hooks/useGames";
import getCroppedImageUrl from "../../services/imageUrl";
import CriticScore from "./CriticScore";
import CriticScoreIcon from "./CriticScoreIcon";
import PlatformIconsList from "./PlatformIconsList";
import noImage from "../../assets/no-image-placeholder.webp";

interface Props {
  game: Game;
  dark: boolean;
}

const GameCard = ({ game, dark }: Props) => {
  const croppedImage = getCroppedImageUrl(game.background_image);

  return (
    <div className="px-3 mb-3 flex flex-col h-full overflow-hidden">
      <img
        className="rounded-t-lg"
        src={croppedImage ? croppedImage : noImage}
        alt={`${game.name} Image`}
      />
      <div className="bg-gray-200 dark:bg-[#202020] p-4 rounded-b-lg grow-1 flex flex-col justify-between">
        <div className="flex justify-between">
          <PlatformIconsList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />

          <CriticScore score={game.metacritic} dark={dark} />
        </div>
        <p className="text-2xl font-bold mt-3 text-start grow-1">
          {game.name} <CriticScoreIcon score={game.rating} />
        </p>
      </div>
    </div>
  );
};

export default GameCard;
