import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTrash, FaUser, FaQuestionCircle, FaShoppingCart, FaBars, FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-3 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <FaBars className="text-2xl cursor-pointer" />
        <h1 className="text-2xl font-bold flex items-center">
          JUMIA <span className="text-orange-500">★</span>
        </h1>
      </div>
      
      <div className="flex items-center border rounded-lg overflow-hidden w-1/2">
        <input 
          type="text" 
          placeholder="Search products, brands and categories" 
          className="p-2 w-full focus:outline-none"
        />
        <button className="bg-orange-500 text-white px-4 py-2">
          <FaSearch />
        </button>
      </div>
      
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2 cursor-pointer">
          <FaUser />
          <span>Account</span>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer">
          <FaQuestionCircle />
          <span>Help</span>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer relative">
          <FaShoppingCart />
          <span>Cart</span>
          <span className="absolute -top-2 -right-3 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">8</span>
        </div>
      </div>
    </nav>
  );
};

const CartPage = () => {
  const [cart, setCart] = useState([]);

  // Load cart data from localStorage when the component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log("Retrieved cart from localStorage:", storedCart); // Debugging
    setCart(storedCart);
  }, []);

  // Update quantity of an item in the cart
  const updateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return; // Ensure quantity is at least 1
    const updatedCart = [...cart];
    updatedCart[index].quantity = newQuantity;
    console.log("Updated cart:", updatedCart); // Debugging
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
  };

  // Remove an item from the cart
  const removeItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    console.log("Removed item. Updated cart:", updatedCart); // Debugging
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
  };

  // Calculate the subtotal of all items in the cart
  const calculateSubtotal = () => {
    return cart.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-4 flex justify-center">
        <div className="w-[100%] flex flex-col lg:flex-row gap-6">
          
          {/* Cart Items Section */}
          <div className="w-[96px] lg:w-[100%] bg-white p-4">
            <h2 className="text-2xl font-semibold mb-4">Cart ({cart.length})</h2>

            {cart.length === 0 ? (
              <p className="text-gray-600">Your cart is empty.</p>
            ) : (
              cart.map((item, index) => (
                <div key={index} className="flex justify-between items-center border-b pb-4 mb-4">
                  <div className="flex items-center space-x-4">
                    <div>
                      <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded" />
                      <button 
                        className="text-orange-500 flex items-center space-x-2 mt-5"
                        onClick={() => removeItem(index)}
                      >
                        <FaTrash className="text-lg" />
                        <span>Remove</span>
                      </button>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-green-600">In Stock</p>
                      <p className="text-gray-500 text-sm flex items-center">
                        <span className="text-black flex py-1 rounded text-xs">JUMIA <span className="text-[#ff7b4f]">EXPRESS</span></span>
                      </p>
                    </div>
                  </div>

                  <div className="items-center space-x-4">
                    <p className="text-[17px] font-bold pl-4 pb-3">₦ {item.price}</p>
                    <div className="flex items-center px-2 py-1">
                      <button 
                        className="bg-orange-500 text-white py-1 px-3 rounded-[6px]"
                        onClick={() => updateQuantity(index, item.quantity - 1)}
                      >-</button>
                      <span className="px-4">{item.quantity || 1}</span>
                      <button 
                        className="bg-orange-500 text-white px-3 py-1 rounded-[8px]"
                        onClick={() => updateQuantity(index, (item.quantity || 1) + 1)}
                      >+</button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cart Summary Section */}
          {cart.length > 0 && (
            <div className="w-[30%] bg-white p-4 shadow-md rounded-lg">
              <h3 className="text-[12px] font-semibold mb-4">CART SUMMARY</h3>
              <div className="flex justify-between text-[14px] font-bold">
                <span>Subtotal</span>
                <span>₦ {calculateSubtotal().toLocaleString()}</span>
              </div>
              <button className="mt-6 w-full bg-orange-500 text-white py-3 rounded-lg text-lg font-semibold">
                Checkout (₦ {calculateSubtotal().toLocaleString()})
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartPage;