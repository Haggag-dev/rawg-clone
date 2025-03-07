import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import Options, { OptionType } from "./Options";
import { AnimatePresence, motion } from "framer-motion";
import { PlatformDetails } from "../../hooks/useGames";

interface Props<T extends OptionType> {
  buttonName: string;
  data: T[];
  setState: (update: any) => void;
}

const Selector = <T extends OptionType>({
  buttonName,
  data,
  setState,
}: Props<T>) => {
  const [toggle, setToggle] = useState(false);
  const selectorRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectorRef.current &&
        !selectorRef.current.contains(event.target as Node)
      ) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative ml-3 mb-6">
      <button
        onClick={() => setToggle(!toggle)}
        ref={selectorRef}
        className="flex gap-x-2 dark:bg-neutral-800 w-fit items-center mb-2.5 px-3 py-2 rounded-lg cursor-pointer hover:bg-neutral-700 font-semibold transition ease-in-out duration-350"
      >
        {buttonName} <IoIosArrowDown />
      </button>

      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ opacity: 0, y: -1 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -1 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
          >
            <Options
              options={data}
              setToggle={() => setToggle(!toggle)}
              setState={(platform: PlatformDetails) => setState(platform)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Selector;
