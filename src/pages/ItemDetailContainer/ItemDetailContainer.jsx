import React, { useState, useEffect } from "react";

//components
import ItemDetail from "../../components/ItemDetail/ItemDetail";

//css
import { LinearProgress } from "@mui/material";

//Firestore
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs, documentId, where } from "firebase/firestore";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

  const [details, setDetails] = useState([]);
   const { id } = useParams();
  const getProducts = async () => {
    const q = query(collection(db, 'products'), where(documentId(), "==", id));
    const querySnapshot = await getDocs(q);
    const docs = [];

    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setDetails(docs);
  }

  useEffect(() => {getProducts() })

  return (
    <div className="itemDetailContainer">
      {
        details !== undefined
          ? details.map((data)=><ItemDetail key={data.id} product={data} /> ) 
          : <LinearProgress className="spiner" />
      }

    </div>
  );
};

export default ItemDetailContainer;