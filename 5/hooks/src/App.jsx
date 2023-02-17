import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [contador, setContador] = useState(1);
  const [usuario, setUsuario] = useState({});

  const suma = () => {
    setContador(contador + 1);
  };

  const resta = () => {
    setContador(contador - 1);
  };

  const reset = () => {
    setContador(0);
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${contador}`)
      .then((response) => response.json())
      .then((json) => setUsuario(json));
  }, [contador]); //[] para que solo se ejecute una vez

  return (
    <div>
      <h1>My App</h1>
      <button onClick={resta}>-</button>
      <button onClick={reset}>Volver a 0</button>
      <button onClick={suma}>+</button>
      <h4>contador: {contador}</h4>
      <h2>Usuarios</h2>
      {/* {usuarios.map((user) => {
        return <h3>{user.name}</h3>;
      })} */}
      <h3>{usuario.name}</h3>
      <h4>{usuario.email}</h4>
      <h4>{usuario.phone}</h4>
    </div>
  );
}

export default App;
