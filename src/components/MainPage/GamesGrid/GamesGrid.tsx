import React from "react";
import useGames from "../../../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

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
            {isFetchingNextPage ? (
              <svg
                className="w-6 h-6 animate-spin text-black dark:text-neutral-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 3C6.13401 3 3 6.13401 3 10C3 10.2761 2.77614 10.5 2.5 10.5C2.22386 10.5 2 10.2761 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C9.72386 18 9.5 17.7761 9.5 17.5C9.5 17.2239 9.72386 17 10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3Z"
                  fill="currentColor"
                />
              </svg>
            ) : (
              "Load More"
            )}
          </button>
        </div>
      )}
    </>
  );
};

export default GamesGrid;
