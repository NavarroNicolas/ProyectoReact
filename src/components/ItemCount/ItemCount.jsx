import React, {useContext} from 'react'

//context
import {ItemsContext} from '../../context/ItemContext';

//css
import "./itemCount.css"
import { Button } from '@mui/material';


const ItemCount = ( {maxStock} ) => {

   const { counts, setCounts } = useContext(ItemsContext); 

   const Sumar = () => {
    if( counts >= maxStock) return
    const value = counts + 1;
    setCounts(value);
  };
  const Restar = () => {
    if (counts === 0) return
      const value = counts - 1;
      setCounts(value);
  }

  return (
   <div className="Count">
        <h2>Cantidad: {counts} </h2> 
        <Button variant="outlined" sx={{ m: 1 }} onClick={Restar} disabled={counts===0} > - </Button>
        <Button variant="outlined" sx={{ m: 1 }} onClick={Sumar} disabled= {counts>= maxStock}> + </Button>
    </div>
  );
};

export default ItemCount;