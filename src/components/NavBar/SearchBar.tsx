import { useRef } from "react";
import { IoIosSearch } from "react-icons/io";
import useGameQueryStore from "../../store";

const SearchBar = () => {
  const inpRef = useRef<HTMLInputElement>(null);
  const setSearchString = useGameQueryStore((s) => s.setSearchString);

  const handleSearch = () => {
    if (inpRef.current)
      if (inpRef.current.value) setSearchString(inpRef.current.value);
  };

  const handleSearchEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") handleSearch();
  };

  return (
    <div className="relative flex grow-1 h-10 basis-30 shrink-0 text-neutral-500 bg-neutral-200 dark:bg-search ml-2 rounded-4xl items-center">
      <button
        className="absolute flex size-10 items-center justify-center"
        onClick={handleSearch}
      >
        <IoIosSearch className="size-5" />
      </button>

      <input
        ref={inpRef}
        className="text-sm overflow-x-hidden w-full focus:outline-none focus:ring-2 focus:ring-blue-500 h-full rounded-4xl pl-9 transition-all duration-200 ease-in-out"
        type="text"
        placeholder="Search games..."
        onKeyDown={handleSearchEnter}
      />
    </div>
  );
};

export default SearchBar;
