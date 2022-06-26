import React from "react";


const ItemDetail = ({ details }) => {
  return (
    <div>
      <h1>{details.name}</h1>
      <img src={details.img} alt={details} />
      <h5>Precio:{details.price}</h5>
      <p>{details.desc}</p>
      <button>Comprar</button>
    </div>
  );
};

export default ItemDetail; 