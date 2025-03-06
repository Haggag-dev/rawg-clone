import NavBar from "./components/NavBar/NavBar";
import GamesGrid from "./components/GamesGrid/GamesGrid";
import GenreList from "./components/Genres/GenreList";
import useDarkMode from "./hooks/useDarkMode";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import capitalizeFirstLetter from "./services/capitalizeFirstLetter";
import PlatformSelector from "./components/Selectors/PlatformSelector";

const App = () => {
  const { dark, toggleDarkMode } = useDarkMode();
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <div className="grid grid-cols-[250px_1fr] gap-y-3 text-black dark:text-white">
      <NavBar dark={dark} toggleDarkMode={() => toggleDarkMode()} />

      <aside className="hidden lg:block mt-3">
        <GenreList
          selectedGenre={selectedGenre}
          setSelectedGenre={(genre: Genre) => setSelectedGenre(genre)}
        />
      </aside>

      <main className="col-span-2 lg:col-span-1 lg:col-start-2">
        <h2 className="text-5xl ml-3 mb-7 font-bold">
          {selectedGenre ? capitalizeFirstLetter(selectedGenre.name) : "All"}{" "}
          Games
        </h2>

        <PlatformSelector />

        <GamesGrid dark={dark} genre={selectedGenre} />
      </main>
    </div>
  );
};

export default App;
