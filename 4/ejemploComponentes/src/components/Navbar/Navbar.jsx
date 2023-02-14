import Button from "../Button/Button";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <p>Home</p>
      <p>About</p>
      <p>Projects</p>
      <Button txtBtn="Navbar" />
    </nav>
  );
};

export default Navbar;
