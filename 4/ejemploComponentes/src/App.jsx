import "./App.css";
import Button from "./components/Button/Button";
import List from "./components/List/List";
import Navbar from "./components/Navbar/Navbar";

const frutas = ["Manzana", "Pera", "Sandia", "Melon"];

const App = () => {
  const handleClick = () => {
    alert("Click me!");
  };

  return (
    <div>
      <Navbar />
      <h1>My App</h1>
      <List frutas={frutas} />
      <Button txtBtn="Contacto" handleClick={handleClick} />
      <Button txtBtn="About" handleClick={handleClick} />
      <Button txtBtn="Projects" handleClick={handleClick} />
    </div>
  );
};

export default App;
