import { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";

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

      <aside className="hidden md:block">aside</aside>

      <main className="col-span-2 md:col-span-1 md:col-start-2">main</main>
    </div>
  );
};

export default App;
