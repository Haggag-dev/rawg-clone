import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className="flex grow-1 h-10 basis-30 shrink-0 bg-search ml-2 rounded-4xl items-center">
      <div className="flex size-10 items-center justify-center">
        <IoIosSearch className="size-5" />
      </div>

      <input
        className="text-sm overflow-x-hidden w-full"
        type="text"
        placeholder="Search games..."
      />
    </div>
  );
};

export default SearchBar;
