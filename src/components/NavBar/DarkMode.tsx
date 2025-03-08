interface Props {
  dark: boolean;
  toggleDarkMode: () => void;
}

const DarkMode = ({ dark, toggleDarkMode }: Props) => {
  return (
    <div className="flex basis-0 items-center ml-2 dark:bg-dark">
      <button
        className={`flex w-8 h-5.5 rounded-xl cursor-pointer ${
          dark ? "justify-end bg-[#9AE6B4] " : "justfiy-start bg-gray-400"
        }`}
        onClick={toggleDarkMode}
      >
        <div className="bg-[#e5f7ec] w-5 h-5 p-0.5 rounded-xl self-center"></div>
      </button>

      <p className="text-sm whitespace-nowrap pl-2">Dark Mode</p>
    </div>
  );
};

export default DarkMode;
