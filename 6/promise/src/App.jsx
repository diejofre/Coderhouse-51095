import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [productos, setProductos] = useState([]);

  const obtenerProductos = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProductos(res.data);
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    <>
      <h1>My App</h1>
      <h2>Productos</h2>
      {productos.map((producto) => (
        <Card key={producto.id} producto={producto} />
      ))}
    </>
  );
}

export default App;
