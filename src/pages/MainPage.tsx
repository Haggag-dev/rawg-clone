import GamesGrid from "../components/GamesGrid/GamesGrid";
import GenreList from "../components/Genres/GenreList";
import PlatformSelector from "../components/Selectors/PlatformSelector";
import SelectorHeader from "../components/Selectors/SelectorHeader";
import SortingSelector from "../components/Selectors/SortingSelector";

const MainPage = () => {
  return (
    <>
      <aside className="hidden lg:block mt-3">
        <GenreList />
      </aside>

      <main className="col-span-2 lg:col-span-1 lg:col-start-2">
        <SelectorHeader />

        <div className="flex gap-x-px text-sm 3xs:text-base 3xs:gap-x-2">
          <PlatformSelector />

          <SortingSelector />
        </div>

        <GamesGrid />
      </main>
    </>
  );
};

export default MainPage;
