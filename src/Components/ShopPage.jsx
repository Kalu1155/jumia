import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const ShopPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1); // Remove selected item
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-10">
      {/* Navbar */}
      <nav className="w-full bg-white shadow-md p-4 flex justify-between items-center px-6">
        <h1 className="text-lg font-semibold">Electronics</h1>
        <Link to="/cart" className="relative">
          <FaShoppingCart size={24} />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
              {cart.length}
            </span>
          )}
        </Link>
      </nav>

      {/* Products List */}
      {cart.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {cart.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md w-80 text-center">
              <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
              <h2 className="text-2xl font-semibold mt-4">{item.title}</h2>
              <p className="text-lg text-gray-700 font-bold mt-2">₦{item.price || "N/A"}</p>
              {item.oldPrice && (
                <p className="text-gray-500 line-through text-sm">₦{item.oldPrice}</p>
              )}
              <button
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={() => removeFromCart(index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <h2 className="text-center mt-10">No Deals Selected!</h2>
      )}
    </div>
  );
};

export default ShopPage;
