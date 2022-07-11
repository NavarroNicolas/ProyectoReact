import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

//context
import { ItemsContext } from '../../context/ItemContext';

//css
import { Button, Container } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider';


const Cart = () => {

  const { cart, ClearCart } = useContext(ItemsContext);

  return (
    <Container>

      <Container className='itemsCarrito' sx={{m:4}}>
        {cart.length>1? {cart} : <Typography variant="h5" color="gray">No tenes productos agregados...</Typography>}
      </Container>

      {cart.length>1 && <h2>Precio Total: $ </h2>}

      {cart.length>1 && <Button variant="contained" color="success" sx={{ m: 2 }}>
        Finalizar la compra
      </Button>}

      {cart.length>1 && <Button variant="outlined" color="error" sx={{ m: 2 }} startIcon={<DeleteIcon />}
        onClick={ClearCart}>
        Vaciar Carrito
      </Button>}

      <Divider />

      <Link to="/"> <Button variant="contained" sx={{ m: 2 }}>
        Volver a ver productos
      </Button> </Link>

    </Container>
  )
}

export default Cart