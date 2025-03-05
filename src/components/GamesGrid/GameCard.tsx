import { Game } from "../../hooks/useGames";
import getCroppedImageUrl from "../../services/imageUrl";
import CriticScore from "./CriticScore";
import CriticScoreIcon from "./CriticScoreIcon";
import PlatformIconsList from "./PlatformIconsList";
import noImage from "../../assets/no-image-placeholder.webp";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const croppedImage = getCroppedImageUrl(game.background_image);
  return (
    <div className="px-3 mb-3">
      <img
        className="rounded-t-sm"
        src={croppedImage ? croppedImage : noImage}
        alt={`${game.name} Image`}
      />
      <div className="bg-[#202020] p-4 rounded-b-sm">
        <div className="flex justify-between">
          <PlatformIconsList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />

          <CriticScore score={game.metacritic} />
        </div>
        <p className="text-xl font-bold ">
          {game.name} <CriticScoreIcon score={game.metacritic} />
        </p>
      </div>
    </div>
  );
};

export default GameCard;
