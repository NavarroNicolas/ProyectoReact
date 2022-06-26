import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "./ItemList.css"
/* import ItemCount from '../ItemCount/ItemCount'; */

function ItemList( {data} ) {
  return (
    <div className='itemList'>
      <Card sx={{ maxWidth: 320 }}>
      <CardMedia
        component="img"
        image={data.img}
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>
       {/*  <Typography variant="body2" color="text.secondary">
          {data.id}
        </Typography> */}
      </CardContent>
      <Button className='buyButton' variant="contained" >Ver mas</Button>
    </Card>
    </div>
  );
}

export default ItemList