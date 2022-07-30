import React, {useContext} from "react";

import { ItemsContext } from "../../context/ItemContext";
//import { db } from "../../firebase/firebaseConfig";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Button, Typography } from "@mui/material";
import ItemCount from "../ItemCount/ItemCount";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";

const ItemDetail = ({ details }) => {
  const { AddToCart, counts } = useContext(ItemsContext);

const toastError = () =>{
  toast.error("Seleccione al menos una unidad", {
    position: "top-right",
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
    position: "top-right",
    autoClose:2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
}

  const agregarAlCarro = () => {
     const producto = { ...details, amount: counts };
     if(counts === 0){
      console.log("Seleccione al menos 1 unidad");
      toastError();
    }else{
      AddToCart(producto); 
      console.log("Producto agregado al carrito con éxito");
      toastOk();
    }
     
  };
  return (
    <div className="itemDetail">
      <h1>{details.name}</h1>
      <img src={details.img} alt={details} />

      <Typography variant="h5" color="gray" mt={2}> En stock: {details.stock}</Typography>
      
      <h2>Precio: ${details.price}</h2>
      <p>{details.desc}</p>
      <ItemCount />
      <Button variant="contained"  startIcon={<ShoppingCartIcon/>} onClick={agregarAlCarro}>Add To Cart </Button>
      <Link to="/"> <Button variant="contained" color="secondary">Volver a productos </Button> </Link>
      <ToastContainer/>
    </div>
  );
};

export default ItemDetail; 