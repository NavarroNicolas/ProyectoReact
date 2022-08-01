import React, { createContext, useState } from 'react'

export const ItemsContext = createContext();

const ItemsProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  const [counts, setCounts] = useState(0);
  const [totalCart, setTotalCart] = useState(0)


  const addTotalCart = () => setTotalCart (totalCart + counts)

  const removeCart = (id) =>{
    const prod = cart.find( e => e.id === id )
    setTotalCart( totalCart - prod.amount)
    setCart(cart.filter(c => c.id !== id))
  }

  const AddToCart = (elemento) => {
    if (!InCart(elemento.id)) {
      setCart([...cart, elemento]); 
    }
    cart.forEach((producto, indice) => {
      if (producto.id === elemento.id) {
        cart[indice].amount = producto.amount + elemento.amount;
        setCart([...cart]);
      }
    });
    setCounts(0);
  };

  const InCart = (id) => {
    const esIgual = cart.find((product) => product.id === id);
    return esIgual === undefined ? false : true;
  };
  
  const ClearCart = () => {
    setCart([]);
    setCounts(0);
    setTotalCart(0)
  };

  return (<ItemsContext.Provider
    value={{
      cart,
      counts,
      setCounts,
      AddToCart,
      ClearCart,
      InCart,
      totalCart,
      addTotalCart,
      removeCart
    }}>

    {children}

  </ItemsContext.Provider>
  )
}

export default ItemsProvider



