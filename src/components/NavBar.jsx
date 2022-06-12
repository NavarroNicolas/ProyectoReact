import React from 'react'
import './styles.css';
import CartIcon from '@mui/icons-material/AddShoppingCart';
import { Component } from 'react'
import logoReact from './logo192.png';
import Button from '@mui/material/Button';

import MediaCard from './Card/Card';

class NavBar extends Component {
render() {
    return (
      <div>
        <header>
            <div className='logo'>
                <img src={logoReact} alt="logo" />
            </div>
            <div className='NavBar'>
                <a href="">Home</a>
                <a href="">Servicio</a>
                <a href="">Productos</a>
                <a href="">Contacto</a>
            </div>
            <div>
            <Button><CartIcon color="primary"  sx={{ fontSize: 40 }}></CartIcon></Button>
            </div>
        </header> 
        
        <p>
          <h1>Calefaccion</h1>
        </p>

        <section>
            <MediaCard
              img="https://www.elmaitenmuebles.com.ar/EM/imagenes/calefaccion/tradicionales-andinaS.jpg"
              title="Salamandra"
              desc="asdasd"
            />
            <MediaCard
              img="https://www.monederosmart.com/wp-content/uploads/2020/09/PFW-H8U-0Gv-kyR-R2w-oeG-chaipanya-41630056_m-e1599065273861.jpg"
              title="Aire acondicionado Frio Calor"
              desc="lorem"
            />
            <MediaCard
              img="https://pixelstore.com.ar/wp-content/uploads/2021/05/calefactor-liliana-1.jpg"
              title="Panel Calefactor Electrico"
              desc="lorem"
            />
            
        </section>
      </div>
    )
  }
}

export default NavBar

