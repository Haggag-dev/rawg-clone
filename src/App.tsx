import NavBar from "./components/NavBar/NavBar";
import GamesGrid from "./components/GamesGrid/GamesGrid";
import GenreList from "./components/Genres/GenreList";
import useDarkMode from "./hooks/useDarkMode";

const App = () => {
  const { dark, toggleDarkMode } = useDarkMode();

  return (
    <div className="grid grid-cols-[250px_1fr] gap-y-6 text-black dark:text-white">
      <NavBar dark={dark} toggleDarkMode={() => toggleDarkMode()} />

      <aside className="hidden lg:block">
        <GenreList />
      </aside>

      <main className="col-span-2 lg:col-span-1 lg:col-start-2">
        <GamesGrid dark={dark} />
      </main>
    </div>
  );
};

export default App;
