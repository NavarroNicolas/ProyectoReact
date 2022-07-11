import React, { useContext } from 'react'

import { ItemsContext } from '../../context/ItemContext';

import Button from '@mui/material/Button'
import CartIcon from '@mui/icons-material/AddShoppingCart';

const CartWidget = () => {

  const {numberCart} = useContext(ItemsContext)

  return (
    <div>
        <Button><CartIcon color="primary"  sx={{ fontSize: 40 }}></CartIcon> {numberCart} </Button>
    </div>
  )
}

export default CartWidget