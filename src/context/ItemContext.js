import React, { createContext, useState } from 'react'

export const ItemsContext = createContext();

const ItemsProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  const [counts, setCounts] = useState(0);

  const Sumar = () => {
    const value = counts + 1;
    setCounts(value);
  };
  const Restar = () => {
    if (counts > 0) {
      const value = counts - 1;
      setCounts(value);
    }
  };

  const AddToCart = (elemento) => {
    if (!InCart(elemento.id)) {
      setCart([...cart, elemento]); 
      cart.forEach((producto, indice) => {
        if (producto.id === elemento.id) {
          cart[indice].amount = producto.amount + elemento.amount;
          setCart([...cart]);
        }
      });
    }
    setCounts(0);
  };

  
  const InCart = (id) => {
    const esIgual = cart.find((product) => product.id === id);
    return esIgual === undefined ? false : true;
  };
  
  const ClearCart = () => {
    setCart([]);
    setCounts(0);
  };

  return (<ItemsContext.Provider
    value={{
      cart,
      counts,
      setCounts,
      Sumar,
      Restar,
      AddToCart,
      ClearCart,
      InCart
    }}>

    {children}

  </ItemsContext.Provider>
  )
}

export default ItemsProvider



