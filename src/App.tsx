import MainPage from "./components/MainPage/MainPage";
import NavBar from "./components/MainPage/NavBar/NavBar";

const App = () => {
  return (
    <div className="grid grid-cols-[250px_1fr] gap-y-3 text-black dark:text-white">
      <NavBar />

      <MainPage />
    </div>
  );
};

export default App;
