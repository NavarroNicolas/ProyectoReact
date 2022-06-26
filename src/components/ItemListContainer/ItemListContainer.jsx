import React,{useState, useEffect}from 'react'
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
    const [article, setArticle] = useState ([]);             //array vacio porque le voy a enviar toda la DATA del json

    useEffect( () =>{
      fetch('https://62abbee0a62365888be059ff.mockapi.io/products')
        .then(response => response.json())
        .then(json => setArticle(json));                //setArticle porque le envio toda la DATA del json a "article"
    }, []);

  return (
    <div className='contenedor'>
        {article.map((article) => (
            <ItemList key={article.id} data={article}/>
        ))}
    </div>
  )
}

export default ItemListContainer