import { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import GamesGrid from "./components/GamesGrid/GamesGrid";

const App = () => {
  const getStoredDarkMode = () =>
    JSON.parse(localStorage.getItem("dark") || "true");
  const saveDarkMode = (dark: boolean) => {
    localStorage.setItem("dark", JSON.stringify(dark));
  };
  const [dark, setDark] = useState(getStoredDarkMode());

  useEffect(() => {
    document.querySelector("body")?.classList.toggle("dark", dark);
    saveDarkMode(dark);
  }, [dark]);

  const toggleDarkMode = () => setDark((prevDark: boolean) => !prevDark);

  return (
    <div className="grid grid-cols-[210px_1fr] text-black dark:text-white">
      <NavBar dark={dark} toggleDarkMode={() => toggleDarkMode()} />

      <aside className="hidden lg:block">aside</aside>

      <main className="col-span-2 lg:col-span-1 lg:col-start-2">
        <GamesGrid dark={dark} />
      </main>
    </div>
  );
};

export default App;
