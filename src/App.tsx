import NavBar from "./components/NavBar/NavBar";
import GamesGrid from "./components/GamesGrid/GamesGrid";
import GenreList from "./components/Genres/GenreList";
import useDarkMode from "./hooks/useDarkMode";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import capitalizeFirstLetter from "./services/capitalizeFirstLetter";
import PlatformSelector from "./components/Selectors/PlatformSelector";
import { PlatformDetails } from "./hooks/useGames";
import SortingSelector, {
  OrderSorter,
} from "./components/Selectors/SortingSelector";

export interface GameQuery {
  genre: Genre;
  platform: PlatformDetails | null;
  order: OrderSorter;
  search: string;
}

const App = () => {
  const { dark, toggleDarkMode } = useDarkMode();
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <div className="grid grid-cols-[250px_1fr] gap-y-3 text-black dark:text-white">
      <NavBar
        dark={dark}
        toggleDarkMode={() => toggleDarkMode()}
        setSearchQuery={(search: string) =>
          setGameQuery({ ...gameQuery, search })
        }
      />

      <aside className="hidden lg:block mt-3">
        <GenreList
          selectedGenre={gameQuery.genre}
          setSelectedGenre={(genre: Genre) =>
            setGameQuery({ ...gameQuery, genre })
          }
        />
      </aside>

      <main className="col-span-2 lg:col-span-1 lg:col-start-2">
        <h2 className="text-5xl ml-3 mb-7 font-bold">
          {gameQuery
            ? capitalizeFirstLetter(gameQuery.platform?.name || "") +
              " " +
              capitalizeFirstLetter(gameQuery.genre?.name || "") +
              " "
            : "All"}
          Games
        </h2>

        <div className="flex gap-x-2">
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            setSelectedPlatform={(platform: PlatformDetails) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />

          <SortingSelector
            selectedOrder={gameQuery.order?.name || ""}
            setSelectedOrder={(order: OrderSorter) =>
              setGameQuery({ ...gameQuery, order })
            }
          />
        </div>

        <GamesGrid dark={dark} gameQuery={gameQuery} />
      </main>
    </div>
  );
};

export default App;
