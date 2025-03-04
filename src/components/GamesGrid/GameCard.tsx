import { Game } from "../../hooks/useGames";

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
      <div className="bg-[#202020] p-2 text-xl font-bold rounded-b-sm">
        <p>{game.name}</p>
      </div>
    </div>
  );
};

export default GameCard;
