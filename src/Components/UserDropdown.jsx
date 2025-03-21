import React, { useState } from "react";
import { FiUser } from "react-icons/fi";
import { FaRegUser, FaBox, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative">
      {/* User Icon */}
      <FiUser 
        className="mx-4 text-xl cursor-pointer" 
        onClick={() => setIsOpen(!isOpen)} 
      />

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-4 z-50">
          {/* Sign In Button */}
          <button 
            className="w-full bg-orange-500 text-white py-2 rounded-md font-semibold hover:bg-orange-600"
            onClick={() => navigate('/signin')}
          >
            Sign In
          </button> 

          {/* Menu Options */}
          <ul className="mt-3 space-y-2">
            <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
              <FaRegUser className="text-gray-600" />
              <span>My Account</span>
            </li>
            <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
              <FaBox className="text-gray-600" />
              <span>Orders</span>
            </li>
            <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
              <FaHeart className="text-gray-600" />
              <span>Wishlist</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
