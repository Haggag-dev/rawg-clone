import { useEffect } from "react";
import useDarkModeStore from "../stores/darkModeStore";

const darkMode = () => {
  const { dark, toggle } = useDarkModeStore();

  useEffect(() => {
    document.querySelector("body")?.classList.toggle("dark", dark);
  }, [dark]);

  const toggleDarkMode = () => toggle();

  return { dark, toggleDarkMode };
};

export default darkMode;
