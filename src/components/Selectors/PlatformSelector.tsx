import { IoIosArrowDown } from "react-icons/io";
import useParentPlatforms from "../../hooks/useParentPlatforms";
import { useState } from "react";
import Options from "./Options";

const PlatformSelector = () => {
  const { data } = useParentPlatforms();
  const [toggle, setToggle] = useState(false);

  return (
    <div className="relative ml-3 mb-6">
      <button
        onClick={() => setToggle(!toggle)}
        className="flex gap-x-2 dark:bg-neutral-800 w-fit items-center mb-2.5 px-3 py-2 rounded-lg cursor-pointer hover:bg-neutral-700 font-semibold"
      >
        PlayStation <IoIosArrowDown />
      </button>
      {toggle && (
        <Options options={data} setToggle={() => setToggle(!toggle)} />
      )}
    </div>
  );
};

export default PlatformSelector;
