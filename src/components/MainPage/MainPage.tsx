import GamesGrid from "./GamesGrid/GamesGrid";
import GenreList from "./Genres/GenreList";
import PlatformSelector from "./Selectors/PlatformSelector";
import SelectorHeader from "./Selectors/SelectorHeader";
import SortingSelector from "./Selectors/SortingSelector";

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
