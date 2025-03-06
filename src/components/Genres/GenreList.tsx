import useGenres from "../../hooks/useGenres";

const GenreList = () => {
  const { data, error } = useGenres();
  return (
    <div className="pl-6">
      {error && <p className="text-red-500">{error}</p>}
      <h3 className="font-bold text-2xl mb-3">Genres</h3>
      <ul className="flex flex-col gap-y-3">
        {data.map((genre) => (
          <li key={genre.id} className="text-white flex gap-x-2 items-center">
            <img
              className="w-8 h-8 object-cover rounded-lg"
              src={genre.image_background}
              alt={`${genre.name} Image`}
            />
            <span className="text-neutral-500 dark:text-neutral-300 cursor-pointer hover:underline">
              {genre.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;
