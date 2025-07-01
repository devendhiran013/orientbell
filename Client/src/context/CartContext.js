import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (tile) => {
    setCart((prevCart) => {
      const exists = prevCart.find((item) => item.id === tile.id);
      if (exists) {
        return prevCart.map((item) =>
          item.id === tile.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...tile, quantity: 1 }];
    });
  };

  const removeFromCart = (tileId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== tileId));
  };

  const incrementQuantity = (tileId) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === tileId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (tileId) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === tileId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const updateQuantity = (tileId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === tileId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart, // ✅ Add this here
        incrementQuantity,
        decrementQuantity,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
