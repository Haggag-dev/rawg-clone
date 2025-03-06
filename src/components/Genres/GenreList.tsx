import useGenres from "../../hooks/useGenres";

const GenreList = () => {
  const { genres, error } = useGenres();
  return (
    <>
      {error && <p className="text-red-500">{error}</p>}
      {genres.map((genre) => (
        <p key={genre.id} className="text-white">
          {genre.slug}
        </p>
      ))}
    </>
  );
};

export default GenreList;
