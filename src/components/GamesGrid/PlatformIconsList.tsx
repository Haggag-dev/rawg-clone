import { PlatformDetails } from "../../hooks/useGames";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsNintendoSwitch } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: PlatformDetails[];
}

const PlatformIconsList = ({ platforms }: Props) => {
  const platformIcons: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    nintendo: BsNintendoSwitch,
    globe: BsGlobe,
  };

  return (
    <div className="flex text-neutral-500 mt-1 mb-3 gap-x-2">
      {platforms.map((p) => {
        const IconComponent = platformIcons[p.slug];
        return IconComponent ? <IconComponent key={p.slug} /> : null;
      })}
    </div>
  );
};

export default PlatformIconsList;
