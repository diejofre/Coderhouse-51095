import Button from "../Button/Button";
import styles from "./navbar.module.css";
import { BsCart4 } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      {/* <CartWidget /> */}
      <p>Home</p>
      <p>About</p>
      <p>Projects</p>
      <BsCart4 />
    </nav>
  );
};

export default Navbar;
