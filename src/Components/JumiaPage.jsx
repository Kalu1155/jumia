import React, { useState } from "react";
// import { FaHeart, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import SidebarFilter from "./SidebarFilter";
import JumiaFooter from "./JumiaFooter";
import Footers from '../Components/Footer';
import ProductList from "./ProductList";


  

  


 


const Sidebar = () => (
  <div className="w-1/4 p-4 border-r border-gray-300">
    <h2 className="font-semibold text-sm">CATEGORY</h2>
    <ul className="mb-4">
      <li>Sporting Goods</li>
      <li>Automobile</li>
    </ul>
    <h2 className="font-semibold text-sm">EXPRESS DELIVERY</h2>
    <input type="checkbox" className="mr-2" /> JUMIA EXPRESS
    <h2 className="font-semibold text-sm mt-4">SHIPPED FROM</h2>
    <input type="checkbox" className="mr-2" /> Shipped from Nigeria
    <h2 className="font-semibold text-sm mt-4">BRAND</h2>
    <div className="mb-3 mt-2">
      <input type="checkbox" className="mr-2" /> Agapeon
    </div>
    <div className="mb-3">
      <input type="checkbox" className="mr-2" /> Bro Toumi
    </div>
    <input type="checkbox" className="mr-2" /> Generic
    <SidebarFilter />
  </div>
);




const JumiaPage = () => {
  const [hoveredProductId, setHoveredProductId] = useState(null);

  const handleSaveProduct = () => {
    // Handle save product logic here
  };

  return (
    <div className="flex flex-col bg-gray-100 min-h-screen">
      <div className="flex p-4">
        <Sidebar />
        <ProductList />
      </div>
      <JumiaFooter />
      <Footers />
    </div>
  );
};

export default JumiaPage;