import DarkMode from "./DarkMode";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

interface Props {
  dark: boolean;
  toggleDarkMode: () => void;
  setSearchQuery: (search: string) => void;
}

const NavBar = ({ dark, toggleDarkMode, setSearchQuery }: Props) => {
  return (
    <nav className="w-full h-20 col-span-2 mt-2">
      <div className="flex items-center h-15 px-2.5">
        <Logo />

        <SearchBar setSearchQuery={(search: string) => setSearchQuery(search)} />

        <DarkMode dark={dark} toggleDarkMode={toggleDarkMode}/>
      </div>
    </nav>
  );
};

export default NavBar;
