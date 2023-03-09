import { createContext, useContext } from "react";
import { UserContext } from "./contexts/UserContext";
import "./App.css";
import User from "./components/User";

const CartContext = createContext();

function App() {
  const carrito = ["Producto 1", "Producto 2", "Producto 3"];
  return (
    <CartContext.Provider value={carrito}>
      <UserContext.Provider value="Pepe">
        <User />
      </UserContext.Provider>
      <Navbar />
    </CartContext.Provider>
  );
}

const Navbar = () => {
  const cart = useContext(CartContext);
  return (
    <div>
      <h1>Navbar</h1>
      <p>Items: {cart.length}</p>
    </div>
  );
};

export default App;
