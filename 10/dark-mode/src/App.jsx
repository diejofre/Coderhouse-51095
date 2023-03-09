import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { DarkModeContext } from "./contexts/DarkModeContext";

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <DarkModeContext.Provider value={isDark}>
      <Navbar toggleDarkMode={toggleDarkMode} />
      <Main />
    </DarkModeContext.Provider>
  );
}

export default App;
