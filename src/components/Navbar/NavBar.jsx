import React from 'react'
import './styles.css';

import { Component } from 'react'
import logoReact from './logo192.png';

import MediaCard from '../CardProducts/Card';
import CartWidget from '../CartWidget/CartWidget';

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
                <a href="">Catalogo</a>
                <a href="">Contacto</a>
            </div>
            <div>
              <CartWidget/>
            </div>
        </header> 
        
        <p>
          <img src="https://images.emojiterra.com/google/noto-emoji/v2.034/128px/1f525.png" alt="hot" />
          <h1>Calefaccion</h1>
          <img src="https://images.emojiterra.com/google/noto-emoji/v2.034/128px/1f525.png" alt="hot" />  

        </p>

        <section>
            <MediaCard
              img="https://www.elmaitenmuebles.com.ar/EM/imagenes/calefaccion/tradicionales-andinaS.jpg"
              title="Salamandra"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, facere!"
            />
            <MediaCard
              img="https://www.monederosmart.com/wp-content/uploads/2020/09/PFW-H8U-0Gv-kyR-R2w-oeG-chaipanya-41630056_m-e1599065273861.jpg"
              title="Aire acondicionado Frio Calor"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, facere!"
            />
            <MediaCard
              img="https://pixelstore.com.ar/wp-content/uploads/2021/05/calefactor-liliana-1.jpg"
              title="Panel Calefactor Electrico"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, facere!"
            />
            
        </section>
      </div>
    )
  }
}

export default NavBar

