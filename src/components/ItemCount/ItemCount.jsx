import React, {useContext} from 'react'

//context
import {ItemsContext} from '../../context/ItemContext';

//css
import "./itemCount.css"
import { Button } from '@mui/material';


const ItemCount = () => {

 const { counts, Sumar, Restar } = useContext(ItemsContext); 

  return (
   <div className="Count">
        <h2>Cantidad: {counts} </h2> 
        <Button variant="outlined" sx={{ m: 1 }} onClick={Restar}> - </Button>
        <Button variant="outlined" sx={{ m: 1 }} onClick={Sumar}> + </Button>
    </div>
  );
};

export default ItemCount;