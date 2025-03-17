import DarkMode from "./DarkMode";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <nav className="w-full h-20 col-span-2 mt-2">
      <div className="flex items-center h-15 px-2.5">
        <Logo />

        <SearchBar />

        <DarkMode />
      </div>
    </nav>
  );
};

export default NavBar;
