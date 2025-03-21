import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add a product to the cart
  const addToCart = (product) => {
    const updatedCart = [...cart];
    const productIndex = updatedCart.findIndex((item) => item.id === product.id);

    if (productIndex > -1) {
      updatedCart[productIndex].quantity += 1; // Increment quantity if product already exists
    } else {
      updatedCart.push({ ...product, quantity: 1 }); // Add new product to cart
    }

    setCart(updatedCart);
  };

  // Remove a product from the cart
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  // Update the quantity of a product in the cart
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return; // Ensure quantity is at least 1
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);