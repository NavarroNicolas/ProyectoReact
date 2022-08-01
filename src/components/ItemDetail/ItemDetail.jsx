import React, {useContext, useEffect} from "react";

import { ItemsContext } from "../../context/ItemContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Button, Typography } from "@mui/material";
import ItemCount from "../ItemCount/ItemCount";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";

const ItemDetail = ({ product , id}) => {
  const { AddToCart, counts, addTotalCart, setCounts } = useContext(ItemsContext);

const toastError = () =>{
  toast.error("Seleccione al menos una unidad", {
    position: "bottom-right",
    autoClose:2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
}
const toastOk = () =>{
  toast.success("Producto agregado al carrito", {
    position: "bottom-right",
    autoClose:2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
}

  const agregarAlCarro = () => {
     const producto = { ...product, amount: counts };
     if(counts === 0){
      console.log("Seleccione al menos 1 unidad");
      toastError();
    }else{
      addTotalCart();
      AddToCart(producto); 
      console.log("Producto agregado al carrito con éxito");
      toastOk();
    }
     
  };

  useEffect(() => {
    return () => {
      setCounts(0)
    }
  }, [setCounts])
  
  return (
    <div className="itemDetail">
      <h1>{product.name}</h1>
      <img src={product.img} alt={product} />

      <Typography variant="h5" color="gray" mt={2}> En stock: {product.stock}</Typography>
      
      <h2>Precio: ${product.price}</h2>
      <p>{product.desc}</p>
      <ItemCount maxStock={product.stock} />
      <Link to="/"> <Button variant="outlined" color="secondary">Volver a productos </Button> </Link>
      <Button variant="contained"  startIcon={<ShoppingCartIcon/>} onClick={agregarAlCarro}>Add To Cart </Button>
      <ToastContainer/>
    </div>
  );
};

export default ItemDetail; 