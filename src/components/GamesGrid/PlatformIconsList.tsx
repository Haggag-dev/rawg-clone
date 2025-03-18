import { IconType } from "react-icons";
import { BsGlobe, BsNintendoSwitch } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { PlatformDetails } from "../../entities/PlatformDetails";

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
    <div className="flex text-neutral-500 gap-x-2">
      {platforms.map((p) => {
        const IconComponent = platformIcons[p.slug as string];
        return IconComponent ? <IconComponent key={p.slug} size={14} /> : null;
      })}
    </div>
  );
};

export default PlatformIconsList;
