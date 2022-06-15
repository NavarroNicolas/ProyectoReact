import React from 'react'
import "./itemCount.css"


const ItemCount = () => {
  let stock = 5;

  const [number, setNumber] = React.useState(0);
  
  const suma = () => number < stock && setNumber(number + 1);
  const resta = () => number > 0 && setNumber(number - 1);
  const add = () => number>0 ? alert("Agregado al carrito") : alert("Debes agregar al menos 1 unidad")

  return (
    <div className="Count">
      <div>
        <h2> Cantidad: {number} </h2>
        <button onClick={resta}> - </button>
        <button onClick={suma}> + </button>
      </div>
      <div>
        <button onClick={add}> Add to cart </button>
        
      </div>
    </div>
  );
};

export default ItemCount;