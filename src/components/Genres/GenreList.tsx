import useGenres from "../../hooks/useGenres";

const GenreList = () => {
  const { data, error, loading } = useGenres();
  const skeletonKeys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="pl-6">
      {error && <p className="text-red-500">{error}</p>}
      <h3 className="font-bold text-2xl mb-3">Genres</h3>
      <ul className="flex flex-col gap-y-3">
        {loading
          ? skeletonKeys.map((key) => (
              <li key={key} className="flex gap-x-2 items-center animate-pulse">
                <div className="bg-neutral-600 w-8 h-8 object-cover rounded-lg"></div>
                <div className="flex flex-col gap-y-1 grow-1">
                  <span className="bg-neutral-600 w-[70%] h-1.5 rounded-xs"></span>
                  <span className="bg-neutral-600 w-[40%] h-1.5 rounded-xs"></span>
                </div>
              </li>
            ))
          : data.map((genre) => (
              <li
                key={genre.id}
                className="text-white flex gap-x-2 items-center"
              >
                <img
                  className="w-8 h-8 object-cover rounded-lg"
                  src={genre.image_background}
                  alt={`${genre.name} Image`}
                />
                <button className="text-neutral-500 dark:text-neutral-300 cursor-pointer hover:underline">
                  {genre.name}
                </button>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default GenreList;
