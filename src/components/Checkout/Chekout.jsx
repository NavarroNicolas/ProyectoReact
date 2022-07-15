import React from 'react'
import TextField from '@mui/material/TextField';
import { Button, Container } from '@mui/material'

const Chekout = () => {
    return (
        <div>
            <Container>
                <h1>Finalizar tu compra</h1>
                <Container sx={{m:2}}>
                    <TextField id="outlined-basic" label="Nombre" variant="outlined" />
                </Container>
                <Container sx={{m:2}}>
                    <TextField id="outlined-basic" label="Apellido" variant="outlined" />
                </Container>
                <Container sx={{m:2}}>
                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                </Container>
                <Button variant="contained" color="success">Confirmar Compra</Button>
            </Container>
        </div>
    )
}

export default Chekout