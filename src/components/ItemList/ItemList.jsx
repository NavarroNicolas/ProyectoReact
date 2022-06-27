import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import { useParams } from 'react-router-dom';


const ItemList = ({ article }) => {
  const [articulos, setArticulos] = useState([]);
  const { category } = useParams();

  useEffect(() => (
    setArticulos(category
      ? article.filter((art) => art.category === category)
      : article)
  ), [category]);

  return (
    <div className='itemList'>
      {
        articulos.map((a) => (
          <Item key={a.id} data={a} />
        ))
      }
    </div>
  );
};

export default ItemList;