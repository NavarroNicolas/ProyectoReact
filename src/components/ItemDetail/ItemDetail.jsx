import React, {useContext} from "react";
import { ItemsContext } from "../../context/ItemContext";
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({ details }) => {
  const { AddToCart, ClearCart } = useContext(ItemsContext);

  return (
    <div className="itemDetail">
      <h1>{details.name}</h1>
      <img src={details.img} alt={details} />
      <h2>Precio: ${details.price}</h2>
      <p>{details.desc}</p>
      <ItemCount />
      <button onClick={AddToCart}>Agregar al carrito </button>
      <button onClick={ClearCart}>Vaciar carrito </button>
    </div>
  );
};

export default ItemDetail; 