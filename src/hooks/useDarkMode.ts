import { useEffect, useState } from "react";

const darkMode = () => {
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

  return { dark, toggleDarkMode };
};

export default darkMode;
