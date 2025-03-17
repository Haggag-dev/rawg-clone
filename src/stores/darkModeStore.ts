import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

interface DarkModeStore {
  dark: boolean;
  toggle: () => void;
}

const getStoredDarkMode = () =>
  JSON.parse(localStorage.getItem("dark") || "true");

const saveDarkMode = (dark: boolean) => {
  localStorage.setItem("dark", JSON.stringify(dark));
};

const useDarkModeStore = create<DarkModeStore>((set) => ({
  dark: getStoredDarkMode(),
  toggle: () =>
    set((store) => {
      saveDarkMode(!store.dark);
      return { dark: getStoredDarkMode() };
    }),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("Dark Mode Store", useDarkModeStore);

export default useDarkModeStore;
