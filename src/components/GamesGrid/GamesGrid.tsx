import React from "react";
import useGames from "../../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import Spinner from "../ui/Spinner";

const GamesGrid = () => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGames();

  const skeletonKeys = [0, 1, 2, 3, 4, 5, 6, 7];

  if (error)
    return (
      <p className="ml-3 text-4xl text-red-500 font-bold">{error.message}</p>
    );

  return (
    <>
      <section className="grid auto-rows-fr items-stretch gap-y-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-4">
        {isLoading
          ? skeletonKeys.map((skeletonKey) => (
              <GameCardSkeleton key={skeletonKey} />
            ))
          : data?.pages.map((page, index) => (
              <React.Fragment key={index}>
                {page.results.map((game) => (
                  <GameCard key={game.id} game={game} />
                ))}
              </React.Fragment>
            ))}
      </section>

      {hasNextPage && (
        <div className="flex w-full justify-center mt-4 mb-10">
          <button
            className="bg-gray-200 dark:bg-[#202020] font-medium px-4 py-2 rounded-sm cursor-pointer"
            onClick={() => fetchNextPage()}
          >
            {isFetchingNextPage ? <Spinner /> : "Load More"}
          </button>
        </div>
      )}
    </>
  );
};

export default GamesGrid;
