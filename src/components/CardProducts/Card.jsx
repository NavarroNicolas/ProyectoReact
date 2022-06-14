import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount';

function MediaCard( props ) {
  return (
    <Card /* sx={{ maxWidth: 400 }}> */>
      <CardMedia
        component="img"
        image={props.img}
        alt="img 1"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.desc}
        </Typography>
      </CardContent>

      <ItemCount/>
      
    </Card>
  );
}

export default MediaCard