import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <div className="grid grid-cols-[210px_1fr] text-white">
      <NavBar />

      <aside className="hidden md:block">aside</aside>

      <main className="col-span-2 md:col-span-1 md:col-start-2">main</main>
    </div>
  );
};

export default App;
