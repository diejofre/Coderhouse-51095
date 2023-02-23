import {
  Avatar,
  Button,
  ButtonGroup,
  CircularProgress,
  Tooltip,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import "./App.css";
import { useEffect, useState } from "react";
import CardProduct from "./CardProduct/CardProduct";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      {/* <CircularProgress />
      <Tooltip title="Messi">
        <Avatar
          alt="Remy Sharp"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Lionel_Messi_in_2018.jpg/399px-Lionel_Messi_in_2018.jpg"
        />
      </Tooltip>
      <Typography variant="h1" component="h2">
        h1. Heading
      </Typography>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button color="secondary">Hello World</Button>
        <Button
          size="small"
          color="success"
          onClick={() => {
            alert("clicked");
          }}
          variant="contained"
        >
          Hello World
        </Button>
        <Button color="error" variant="outlined">
          Hello World
        </Button>
      </ButtonGroup>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button> */}
      {products.map((product) => (
        <CardProduct product={product} />
      ))}
    </div>
  );
}

export default App;
