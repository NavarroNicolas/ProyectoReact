import React, { useState, useEffect } from 'react';

//Components
import ItemList from '../../components/ItemList/ItemList';

//css
import { LinearProgress } from '@mui/material';

//Firestore
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

const ItemListContainer = () => {

  const [article, setArticle] = useState([]);

  const getProducts = async () => {
    const q = query(collection(db, 'products'));
    const querySnapshot = await getDocs(q);
    const docs = [];

    querySnapshot.forEach((doc) => {
      /* console.log(doc.id ,'=>', doc.data()) */
      docs.push({ ...doc.data(), id: doc.id });
    });
    setArticle(docs);
  }

  useEffect(() => {getProducts() }, [])
  console.log(article)

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


/*   const [article, setArticle] = useState([]);             //array vacio porque le voy a enviar toda la DATA del json

  useEffect(() => {
    fetch('https://62abbee0a62365888be059ff.mockapi.io/products')
      .then(response => response.json())
      .then(json => setTimeout(() => setArticle(json), 1000));                //setArticle porque le envio toda la DATA del json a "article"
  }, []); */

