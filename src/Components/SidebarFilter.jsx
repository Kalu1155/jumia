import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => (
  <div className="border p-2 w-[200px] rounded-[12px] mt-15">
    <img src={product.image} alt={product.name} className="w-[250px] h-54 object-cover" />
    <h3 className="font-semibold mt-2">{product.name}</h3>
    <p className="text-orange-500 font-bold">{product.price}</p>
    <p className="text-gray-400 line-through">{product.oldPrice}</p>
    <p className="text-green-500">{product.discount}</p>
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} className={i < product.rating ? "text-orange-500" : "text-gray-300 "} />
      ))}
      <span className="ml-2">{product.reviews}</span>
    </div>
    <p className="text-red-500 font-semibold">JUMIA EXPRESS</p>
  </div>
);

const SidebarFilter = () => {
  return (
    <div className="flex">
      <div className="w-72 p-4 text-sm text-gray-700">
        <h2 className="font-semibold text-md">PRICE (₦)</h2>
        <div className="flex items-center mt-2">
          <input
            type="range"
            min="950"
            max="29980"
            className="w-full accent-orange-500"
          />
        </div>
        <div className="flex items-center justify-between mt-2">
          <input
            type="number"
            className="border p-1 w-20 text-center"
          />
          <span>-</span>
          <input
            type="number"
            className="border p-1 w-20 text-center"
          />
        </div>

        {/* Product Rating Filter */}
        <div className="mt-6">
          <h3 className="font-semibold">PRODUCT RATING</h3>
          <div className="mt-2">
            <div className="flex items-center">
              <input type="checkbox" id="rating4" className="mr-2" />
              <p className="text-[#f6b01e]">★★★★★ </p>
              <p className="text-[#c7c7cd]">★★ </p>
              <p>& above</p>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="rating3" className="mr-2" />
              <p className="text-[#f6b01e]">★★★★ </p>
              <p className="text-[#c7c7cd]">★★ </p>
              <p>& above</p>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="rating2" className="mr-2" />
              <p className="text-[#f6b01e]">★★★ </p>
              <p className="text-[#c7c7cd]">★★ </p>
              <p>& above</p>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="rating1" className="mr-2" />
              <p className="text-[#f6b01e]">★★ </p>
              <p className="text-[#c7c7cd]">★★ </p>
              <p>& above</p>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="rating1" className="mr-2" />
              <p className="text-[#f6b01e]">★★ </p>
              <p className="text-[#c7c7cd]">★ </p>
              <p>& above</p>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="rating1" className="mr-2" />
              <p className="text-[#f6b01e]">★ </p>
              <p className="text-[#c7c7cd]">★ </p>
              <p>& above</p>
            </div>
          </div>
        </div>

        {/* Seller Score Filter */}
        <div className="mt-6">
          <h3 className="font-semibold">SELLER SCORE</h3>
        </div>

        {/* Official Stores Filter */}
        <div className="mt-6">
          <h3 className="font-semibold">OFFICIAL STORES</h3>
          <div className="mt-2">
            <div className="flex items-center">
              <input type="checkbox" id="officialStore" className="mr-2" />
              <label htmlFor="officialStore">Only Official Store</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="score80" className="mr-2" />
              <label htmlFor="score80">80% or more</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="score60" className="mr-2" />
              <label htmlFor="score60">60% or more</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="score40" className="mr-2" />
              <label htmlFor="score40">40% or more</label>
            </div>
          </div>
        </div>
      </div>

      {/* Products List */}
      <div className="flex gap-3 ml-19 mt-19">
      </div>
    </div>
  );
};

export default SidebarFilter;