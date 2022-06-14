import React from 'react'
import Button from '@mui/material/Button'
import CartIcon from '@mui/icons-material/AddShoppingCart';

const CartWidget = () => {
  return (
    <div>
        <Button><CartIcon color="primary"  sx={{ fontSize: 40 }}></CartIcon></Button>
    </div>
  )
}

export default CartWidget