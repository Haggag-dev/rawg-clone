import { useState } from "react";
import GamesGrid from "./components/GamesGrid/GamesGrid";
import GenreList from "./components/Genres/GenreList";
import NavBar from "./components/NavBar/NavBar";
import PlatformSelector from "./components/Selectors/PlatformSelector";
import SelectorHeader from "./components/Selectors/SelectorHeader";
import SortingSelector from "./components/Selectors/SortingSelector";
import useDarkMode from "./hooks/useDarkMode";

export interface GameQuery {
  genreId: number;
  platformId: number;
  orderId: number;
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
          selectedGenre={gameQuery.genreId}
          setSelectedGenre={(genreId: number) =>
            setGameQuery({ ...gameQuery, genreId })
          }
        />
      </aside>

      <main className="col-span-2 lg:col-span-1 lg:col-start-2">
        <SelectorHeader gameQuery={gameQuery} />

        <div className="flex gap-x-px text-sm 3xs:text-base 3xs:gap-x-2">
          <PlatformSelector
            selectedPlatform={gameQuery.platformId}
            setSelectedPlatform={(platformId: number) =>
              setGameQuery({ ...gameQuery, platformId })
            }
          />

          <SortingSelector
            selectedOrder={gameQuery.orderId || 0}
            setSelectedOrder={(orderId: number) =>
              setGameQuery({ ...gameQuery, orderId })
            }
          />
        </div>

        <GamesGrid dark={dark} gameQuery={gameQuery} />
      </main>
    </div>
  );
};

export default App;
