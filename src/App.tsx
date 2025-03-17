import GamesGrid from "./components/GamesGrid/GamesGrid";
import GenreList from "./components/Genres/GenreList";
import NavBar from "./components/NavBar/NavBar";
import PlatformSelector from "./components/Selectors/PlatformSelector";
import SelectorHeader from "./components/Selectors/SelectorHeader";
import SortingSelector from "./components/Selectors/SortingSelector";
import useDarkMode from "./hooks/useDarkMode";

const App = () => {
  const { dark, toggleDarkMode } = useDarkMode();

  return (
    <div className="grid grid-cols-[250px_1fr] gap-y-3 text-black dark:text-white">
      <NavBar dark={dark} toggleDarkMode={() => toggleDarkMode()} />

      <aside className="hidden lg:block mt-3">
        <GenreList />
      </aside>

      <main className="col-span-2 lg:col-span-1 lg:col-start-2">
        <SelectorHeader />

        <div className="flex gap-x-px text-sm 3xs:text-base 3xs:gap-x-2">
          <PlatformSelector />

          <SortingSelector />
        </div>

        <GamesGrid dark={dark} />
      </main>
    </div>
  );
};

export default App;
