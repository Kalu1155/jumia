import React from "react";
import { FaBars, FaSearch, FaUser, FaQuestionCircle, FaShoppingCart } from "react-icons/fa";
import JumiaPage from "./JumiaPage";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-3 flex justify-between items-center">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <FaBars className="text-2xl cursor-pointer" />
        <h1 className="text-2xl font-bold flex items-center">
          JUMIA <span className="text-orange-500">★</span>
        </h1>
      </div>
      
      {/* Search Bar */}
      <div className="flex items-center border rounded-lg overflow-hidden w-1/2">
        <input 
          type="text" 
          placeholder="Search products, brands and categories" 
          className="p-2 w-full focus:outline-none"
        />
      </div>
        <button className="bg-orange-500 text-white px-4 py-2 mr-10 rounded-10 pt-2 pb-2 rounded-[10px] ">
        Search
        </button>
      
      {/* Right Section */}
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
          <span className="absolute -top-2 -right-3 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">0</span>
        </div>
      </div>
    </nav>
  );
};

const categories = [
  {
    title: "Gadgets & Computing",
    image: "https://ng.jumia.is/cms/0-1-initiatives/jumia-global/2024/August/New_arrival/update/computing.png",
  },
  {
    title: "Women's Fashion",
    image: "https://ng.jumia.is/cms/0-1-initiatives/jumia-global/2024/July/New-Arrival/Artboard_1_copy_5.png",
  },
  {
    title: "DIY & Fitness",
    image: "https://ng.jumia.is/cms/0-1-initiatives/jumia-global/2024/August/New_arrival/update/DIY.png",
  },
  {
    title: "Self Care",
    image: "https://ng.jumia.is/cms/0-1-initiatives/jumia-global/2024/August/New_arrival/update/beauty.png",
  },
  {
    title: "Men's Fashion",
    image: "https://ng.jumia.is/cms/0-1-initiatives/jumia-global/2024/August/New_arrival/update/beauty.png",
  },
  {
    title: "Home Essentials",
    image: "https://ng.jumia.is/cms/0-1-initiatives/jumia-global/2024/August/New_arrival/update/homes.png",
  },
];

const sponsoredProducts = [
  {
    title: "NIVEA Perfect & Radiant Set",
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/55/1713401/1.jpg?5747",
    oldPrice: 29550,
    newPrice: 20160,
    discount: 32,
  },
  {
    title: "Silver Crest 2L Industrial Blender",
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/84/9107893/1.jpg?2175",
    oldPrice: 27031,
    newPrice: 24900,
    discount: 8,
  },
  {
    title: "Hollyland Lark M2 Wireless Mic",
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/4378343/1.jpg?1832",
    oldPrice: 185010,
    newPrice: 185000,
    discount: 1,
  },
  {
    title: "Berrykey 2-in-1 Men's Outfit",
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/55/2183031/1.jpg?4663",
    oldPrice: 28000,
    newPrice: 23000,
    discount: 18,
  },
  {
    title: "Men's Leather Strap Watch",
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/58/9586093/1.jpg?9050",
    oldPrice: 14027,
    newPrice: 8416,
    discount: 40,
  },
  {
    title: "Aojexor Corner Shelves",
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/02/3088932/1.jpg?3620",
    oldPrice: 18627,
    newPrice: 9500,
    discount: 49,
  },
];

const HelloPage = () => {
  return (
    <div className="bg-[#f1f1f2]">
      <div className="bg-[#ff9900]">
        <img src="https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/Awoof-deals/March/AOTM-brands-top-strip.gif" alt="" />
      </div>
      <div className="bg-gray-200 text-sm py-2 px-4 flex gap-120 ">
        <div className="flex">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBHzRDV8FUU56u77iucJVXcQyHUhLX5YY7g&s" alt="" className="w-[20px] h-[20px] rounded-[60px] mt-[1px]" />
          <span className="text-orange-500 font-bold">Sell on Jumia</span>
        </div>
        <span>JUMIA PAY</span>
      </div>
      <Navbar />
      <div className="pt-[29px] pl-[67px]">
        <span className="text-[13px] text-[#8d8d92] ">HomeNew ▶️Arrival Fitness</span>
      </div>

      {/* Category Grid */}
      <div className="ml-15 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 bg-white w-[90%] mt-8">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center cursor-pointer transition-transform transform hover:scale-105">
            <img src={category.image} alt={category.title} className="w-[180px] h-58 object-cover rounded-md shadow-md pt-5" />
            <p className="mt-2 text-sm font-semibold text-center">{category.title}</p>
          </div>
        ))}
      </div>

      {/* Sponsored Products */}
      <div className="bg-[#f1f1f2] pt-5">
        <div className="bg-white p-6 w-[95%] ml-8">
          <h2 className="text-2xl font-bold mb-4">Sponsored products</h2>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide p-2">
            {sponsoredProducts.map((product, index) => (
              <div key={index} className="min-w-[200px] shadow-lg rounded-lg p-3 hover:scale-105 transition-transform bg-gray-100">
                <div className="relative">
                  <img src={product.image} alt={product.title} className="h-52 w-44 object-cover rounded" />
                  <span className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 text-xs rounded">-{product.discount}%</span>
                </div>
                <h3 className="text-sm font-semibold mt-2">{product.title}</h3>
                <p className="text-lg font-bold text-black">₦ {product.newPrice.toLocaleString()}</p>
                <p className="text-gray-500 line-through text-sm">₦ {product.oldPrice.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#f1f1f2] pt-5">
        <div className="bg-white p-6 w-[95%] ml-8">
          <h2 className="text-2xl font-bold mb-4">Sponsored products</h2>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide p-2">
            {sponsoredProducts.map((product, index) => (
              <div key={index} className="min-w-[200px] shadow-lg rounded-lg p-3 hover:scale-105 transition-transform bg-gray-100">
                <div className="relative">
                  <img src={product.image} alt={product.title} className="h-52 w-44 object-cover rounded" />
                  <span className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 text-xs rounded">-{product.discount}%</span>
                </div>
                <h3 className="text-sm font-semibold mt-2">{product.title}</h3>
                <p className="text-lg font-bold text-black">₦ {product.newPrice.toLocaleString()}</p>
                <p className="text-gray-500 line-through text-sm">₦ {product.oldPrice.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#f1f1f2] pt-5">
        <div className="bg-white p-6 w-[95%] ml-8">
          <h2 className="text-2xl font-bold mb-4">Sponsored products</h2>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide p-2">
            {sponsoredProducts.map((product, index) => (
              <div key={index} className="min-w-[200px] shadow-lg rounded-lg p-3 hover:scale-105 transition-transform bg-gray-100">
                <div className="relative">
                  <img src={product.image} alt={product.title} className="h-52 w-44 object-cover rounded" />
                  <span className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 text-xs rounded">-{product.discount}%</span>
                </div>
                <h3 className="text-sm font-semibold mt-2">{product.title}</h3>
                <p className="text-lg font-bold text-black">₦ {product.newPrice.toLocaleString()}</p>
                <p className="text-gray-500 line-through text-sm">₦ {product.oldPrice.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <JumiaPage/>
    </div>
  );
};

export default HelloPage;