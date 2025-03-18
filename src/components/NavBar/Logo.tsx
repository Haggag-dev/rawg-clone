import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";

const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="Logo" className="max-w-15 max-h-15 cursor-pointer" />
    </Link>
  );
};

export default Logo;
