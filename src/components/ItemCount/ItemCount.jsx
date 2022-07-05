import React, {useContext} from 'react'

//context
import {ItemsContext} from '../../context/ItemContext';

//css
import "./itemCount.css"


const ItemCount = () => {

 const { counts, Sumar, Restar } = useContext(ItemsContext); 

  return (
   <div className="Count">
        <h2>Cantidad: {counts} </h2> 
        <button onClick={Restar}> - </button>
        <button onClick={Sumar}> + </button>
    </div>
  );
};

export default ItemCount;