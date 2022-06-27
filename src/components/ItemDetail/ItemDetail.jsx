import React from "react";


const ItemDetail = ({ details }) => {
  return (
    <div className="itemDetail">
      <h1>{details.name}</h1>
      <img src={details.img} alt={details} />
      <h2>Precio: ${details.price}</h2>
      <p>{details.desc}</p>
      <button>Comprar</button>
    </div>
  );
};

export default ItemDetail; 