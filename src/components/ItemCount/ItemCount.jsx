import React from 'react'
import "./itemCount.css"
import {Link} from 'react-router-dom'


const ItemCount = () => {
  let stock = 5;

  const [number, setNumber] = React.useState(0);
  
  const suma = () => number < stock && setNumber(number + 1);
  const resta = () => number > 0 && setNumber(number - 1);
  const add = () => {
    if(number>0){
      <Link to="../Cart/Cart">Redirect</Link>;
      alert("Agregado al carrito") 
    }else{ 
    alert("Debes agregar al menos 1 unidad")
      }
  }
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



/* {<div className="Count">
<div>
  <h2> Cantidad: {number} </h2>
  <button onClick={resta}> - </button>
  <button onClick={suma}> + </button>
</div>
<div>
  <button onClick={add}> Add to cart </button>
</div>
</div>} */