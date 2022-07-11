import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logoReact from './logo192.png';
import './styles.css';

import CartWidget from '../CartWidget/CartWidget';

class NavBar extends Component {
  render() {
    return (
      <header>
        <div className='logo'>
          <img src={logoReact} alt="logo" />
        </div>

        <nav className='NavBar'>
          <Link to="/" >All products</Link>
          <Link to="/hot">Hot</Link>
          <Link to="/cold">Cold</Link>
        </nav>

        <div className='btn-cart'>
          <Link to="/Cart"> <CartWidget /> </Link>
        </div>
      </header>
    );
  }
}

export default NavBar;

