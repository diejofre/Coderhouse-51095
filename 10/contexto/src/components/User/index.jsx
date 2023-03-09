import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

function User() {
  const value = useContext(UserContext);

  return <h1>User: {value}</h1>;
}

export default User;
