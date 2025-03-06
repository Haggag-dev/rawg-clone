const GameCardSkeleton = () => {
  return (
    <div className="px-3 mb-3 flex flex-col h-full overflow-hidden animate-pulse">
      <div className="h-50 rounded-t-lg bg-neutral-600"></div>
      <div className="bg-gray-200 dark:bg-[#202020] p-4 rounded-b-lg flex flex-col justify-around h-25">
        <div className="bg-neutral-600 w-full h-2.5 rounded-xs"></div>
        <div className="bg-neutral-600 w-full h-2.5 rounded-xs"></div>
        <div className="bg-neutral-600 w-[35%] h-2.5 rounded-xs"></div>
      </div>
    </div>
  );
};

export default GameCardSkeleton;
