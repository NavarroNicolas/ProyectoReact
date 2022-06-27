import * as React from 'react';
import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import "./Item.css";

function Item({ data }) {
  return (
    <div className='item'>
      <Card sx={{ maxWidth: 320 }}>
        <CardMedia
          className="imagenCard"
          component="img"
          image={data.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
        </CardContent>
        <Link to={`/detail/${data.id}`} className='buyButton'><Button variant="contained" >Ver mas</Button></Link>
      </Card>
    </div>
  );
}

export default Item;