import { useContext } from "react";
import { DarkModeContext } from "../../contexts/DarkModeContext";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const Navbar = ({ toggleDarkMode }) => {
  const isDark = useContext(DarkModeContext);
  console.log(isDark);
  return (
    <div className={isDark ? "dark" : "light"}>
      <p>Home</p>
      <p>About</p>
      <p>Projects</p>
      <p>Contact</p>
      <button onClick={toggleDarkMode}>
        {isDark ? <BsFillSunFill /> : <BsFillMoonFill />}
      </button>
    </div>
  );
};

export default Navbar;
