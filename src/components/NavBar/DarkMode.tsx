import { useState } from "react";

const DarkMode = () => {
  const [isToggled, setToggled] = useState(true);

  return (
    <div className="flex basis-0 items-center ml-2 bg-dark">
      <label
        htmlFor="check-darkS"
        className={`flex w-7.5 h-4 rounded-xl ${
          isToggled ? "justify-end bg-green-500 " : "justfiy-start bg-gray-400"
        }`}
      >
        <button
          className="bg-[#e5f7ec] w-5 h-5 rounded-xl self-center"
          onClick={() => setToggled(!isToggled)}
        ></button>
      </label>

      <p className="whitespace-nowrap pl-2">Dark Mode</p>
    </div>
  );
};

export default DarkMode;
