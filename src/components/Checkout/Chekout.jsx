import React, { useState } from "react";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

import TextField from "@mui/material/TextField";
import BuyEnd from "../BuyEnd/BuyEnd";
import { Container } from "@mui/system";
import "./Chekout.css"

const initialState = {
  nombre: "",
  apellido: "",
  email: "",
  direccion: "",
};

const Chekout = () => {
  const [values, setValues] = useState(initialState);

  const [compraID, setCompraID] = useState("");

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    const docRef = await addDoc(collection(db, "compras"), {
      values,
    });
    console.log("Document written with ID: ", docRef.id);
    setCompraID(docRef.id);
    setValues(initialState);
  };

  return (
    <>
      <Container>
        <h1>Finalizar tu compra</h1>

        <form onSubmit={onSubmit}>
          <Container>
            <TextField
              id="outlined-basic"
              label="Nombre"
              variant="outlined"
              name="nombre"
              value={values.nombre}
              onChange={handleOnChange}
            />
          </Container>

          <Container>
            <TextField
              id="outlined-basic"
              label="Apellido"
              variant="outlined"
              name="apellido"
              value={values.apellido}
              onChange={handleOnChange}
            />
          </Container>

          <Container>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              name="email"
              value={values.email}
              onChange={handleOnChange}
            />
          </Container>

          <Container>
            <TextField
              id="outlined-basic"
              label="Direccion"
              variant="outlined"
              name="direccion"
              value={values.direccion}
              onChange={handleOnChange}
            />
          </Container>

          <button className="buyBtn">Confirmar Compra</button>
        </form>
        
        {compraID && <BuyEnd compraID={compraID} />}
      </Container>
    </>
  );
};

export default Chekout;
