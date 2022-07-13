import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

//components
import ItemDetail from "../../components/ItemDetail/ItemDetail";

//css
import { LinearProgress } from "@mui/material";

//Firestore


const ItemDetailContainer = () => {
  const [details, setDetails] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://62abbee0a62365888be059ff.mockapi.io/products/${id}`)
      .then((detail) => {
        setTimeout(() => setDetails(detail.data), 1000);
      });
  }, [id]);

  return (
    <div className="itemDetailContainer">
      {
        details !== undefined
          ? <ItemDetail details={details} />
          : <LinearProgress className="spiner" />
      }

    </div>
  );
};

export default ItemDetailContainer;