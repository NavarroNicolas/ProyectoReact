import React,{useState,useEffect} from "react";
import axios from "axios";
import ItemDetail from "../ItemDetail.jsx/ItemDetail";

const ItemDetailContainer = () => {
    const [details, setDetails] = useState([]);
  
    useEffect(() => {
      axios
        .get(`https://62abbee0a62365888be059ff.mockapi.io/products/2`)
        .then((detail) => {
          setDetails(detail.data);
        });
    }, []);
  
    return (
      <div className="itemDetailContainer">
        <ItemDetail details={details}/>
      </div>
    );
  };
  
  export default ItemDetailContainer;