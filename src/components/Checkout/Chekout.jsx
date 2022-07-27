import React, {useState} from 'react'

import TextField from '@mui/material/TextField';
import { Button, Container } from '@mui/material'

const initialState = {
    nombre:'',
    apellido:'',
    email:'',
}

const Chekout = () => {

    const [values,setValues] = useState(initialState);

    const handleOnChange = (e) =>{
        const{value,name} = e.target;
        setValues({...values, [name]: value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    }

    return (
            <>
                <h1>Finalizar tu compra</h1>
                <form onSubmit={onSubmit}>
                    <TextField 
                        id="outlined-basic"
                        label="Nombre" 
                        variant="outlined" 
                        name='nombre'
                        value={values.nombre}
                        onChange={handleOnChange}
                        />
                    <TextField 
                        id="outlined-basic"
                        label="Apellido"
                        variant="outlined" 
                        name='apellido'
                        value={values.apellido}
                        onChange={handleOnChange}
                        />
                    <TextField 
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        name='email'
                        value={values.email}
                        onChange={handleOnChange}
                        />
                <button>
                    Confirmar Compra
                </button>
                </form> 
            </>
    )
}

export default Chekout