import { Game } from "../../entities/Game";
import CriticScore from "../ui/CriticScore";
import DefinitionItem from "../ui/DefinitionItem";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <dl className="grid grid-cols-2 gap-y-8">
      <DefinitionItem term="Platforms">
        {game.parent_platforms.map(({ platform }) => (
          <div key={platform.id}>{platform.name}</div>
        ))}
      </DefinitionItem>

      <DefinitionItem term="Metascore">
        <div className="mt-0.5">
          <CriticScore score={game.metacritic} size="S" />
        </div>
      </DefinitionItem>

      <DefinitionItem term="Genres">
        {game.genres.map((genre) => (
          <div key={genre.id}>{genre.name}</div>
        ))}
      </DefinitionItem>

      <DefinitionItem term="Publishers">
        {game.publishers.map((publisher) => (
          <div key={publisher.id}>{publisher.name}</div>
        ))}
      </DefinitionItem>
    </dl>
  );
};

export default GameAttributes;
