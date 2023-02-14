import "./App.css";
import Button from "./components/Button";

function App() {
  const saludar = () => {
    alert("Hola!");
  };

  return (
    <div>
      <h1>Mi App</h1>

      <Button texto="Botón Navbar" />
      <Button texto="Botón Sidebar" />
      <Button texto="Botón Main" />
    </div>
  );
}

export default App;
