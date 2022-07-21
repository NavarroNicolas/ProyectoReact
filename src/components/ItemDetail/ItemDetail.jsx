import React, {useContext} from "react";

import { ItemsContext } from "../../context/ItemContext";
//import { db } from "../../firebase/firebaseConfig";

import { Button } from "@mui/material";
import ItemCount from "../ItemCount/ItemCount";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";

const ItemDetail = ({ details }) => {
  const { AddToCart, counts} = useContext(ItemsContext);

  const agregarAlCarro = () => {
     const producto = { ...details, amount: counts };
     if(counts === 0){
      console.log("Seleccione al menos 1 unidad")
     }else{
    AddToCart(producto); 
    console.log("Producto agregado al carrito con éxito");
     }
  };
  return (
    <div className="itemDetail">
      <h1>{details.name}</h1>
      <img src={details.img} alt={details} />
      <h2>Precio: ${details.price}</h2>
      <p>{details.desc}</p>
      <ItemCount />
      <Button variant="contained"  startIcon={<ShoppingCartIcon/>} onClick={agregarAlCarro}>Add To Cart </Button>
      <Link to="/"> <Button variant="contained" color="secondary" >Volver a productos </Button> </Link>
    </div>
  );
};

export default ItemDetail; 