import { useContext } from "react";
import { DarkModeContext } from "../../contexts/DarkModeContext";

const Main = () => {
  const isDark = useContext(DarkModeContext);
  return (
    <div className={isDark ? "dark" : "light"}>
      <section>
        <article>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </article>
      </section>
      <section>
        <article></article>
      </section>
    </div>
  );
};

export default Main;
