import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

//context
import { ItemsContext } from "../../context/ItemContext";

//css
import { Button, Container } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Divider from "@mui/material/Divider";

//card UI
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

const Cart = () => {
  const { cart, ClearCart } = useContext(ItemsContext);

  const precioTotal = cart
    .map((item) => item.price)
    .reduce((prev, curr) => prev + curr, 0);

  return (
    <Container>
      <Container className="itemsCarrito" sx={{ m: 4 }}>
        {cart.length >= 1 ? (
          cart.map((e) => {
            return(
              <Box sx={{ p:1, display: "flex"}}>
                <Avatar variant="rounded" src={e.img} />
                <Stack spacing={1}>
                  <Typography variant="h5" component="div">
                    {e.name}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 18 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    $ {e.price}
                  </Typography>
                  </Stack>
              </Box>
            )
          })): (
          <Typography variant="h5" color="gray">
            No tenes productos agregados...
          </Typography>
        )}
      </Container>

      {cart.length >= 1 && <h2>Precio Total: $ {precioTotal} </h2>}

      {cart.length >= 1 && (
        <Link to={"/chekout"}>
          <Button variant="contained" color="success" sx={{ m: 2 }}>
            Finalizar la compra
          </Button>
        </Link>
      )}

      {cart.length >= 1 && (
        <Button
          variant="outlined"
          color="error"
          sx={{ m: 2 }}
          startIcon={<DeleteIcon />}
          onClick={ClearCart}
        >
          Vaciar Carrito
        </Button>
      )}

      <Divider />

      <Link to="/">
        {" "}
        <Button variant="contained" sx={{ m: 2 }}>
          Volver a ver productos
        </Button>{" "}
      </Link>
    </Container>
  );
};

export default Cart;
