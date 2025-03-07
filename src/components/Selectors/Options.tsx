import { PlatformDetails } from "../../hooks/useGames";

export interface OptionType {
  id: number;
  name: string;
}

interface Props<T extends OptionType> {
  setToggle: () => void;
  options: T[];
  setSelectedPlatform: (platform: PlatformDetails) => void;
}

const Options = <T extends OptionType>({
  options,
  setToggle,
  setSelectedPlatform,
}: Props<T>) => {
  return (
    <div className="z-1 absolute flex flex-col dark:bg-neutral-800 rounded-lg gap-y-2 items-start w-55 py-3 outline-1 outline-solid outline-neutral-700">
      {options.map((option) => (
        <button
          className="cursor-pointer hover:bg-neutral-700 w-full h-9 text-start py-1 px-3"
          key={option.id}
          onClick={() => {
            setToggle();
            setSelectedPlatform(option);
          }}
        >
          {option.name}
        </button>
      ))}
    </div>
  );
};

export default Options;
