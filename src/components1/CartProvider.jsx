// CartProvider.jsx
import React, { useState } from 'react';

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (item) => {
    setCart([...cart, item]);
    setTotalPrice(totalPrice + item.price);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter(item => item.id !== itemId);
    const removedItem = cart.find(item => item.id === itemId);
    if (removedItem) {
      setCart(updatedCart);
      setTotalPrice(totalPrice - removedItem.price);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
