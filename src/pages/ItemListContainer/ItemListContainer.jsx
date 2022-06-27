import React, { useState, useEffect } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import { LinearProgress } from '@mui/material';

const ItemListContainer = () => {
  const [article, setArticle] = useState([]);             //array vacio porque le voy a enviar toda la DATA del json

  useEffect(() => {
    fetch('https://62abbee0a62365888be059ff.mockapi.io/products')
      .then(response => response.json())
      .then(json => setTimeout(() => setArticle(json), 1000));                //setArticle porque le envio toda la DATA del json a "article"
  }, []);

  return (
    <div className='contenedor'>
      {
        article.length > 0
          ? <ItemList article={article} />
          : <LinearProgress />
      }
    </div>
  );
};

export default ItemListContainer;