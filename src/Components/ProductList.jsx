import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [hoveredProductId, setHoveredProductId] = useState(null); // Track hovered product

  // Parse merchant ID from localStorage
  const id = JSON.parse(localStorage.getItem("admin")) || {};
  const merchantId = id?.id;

  // Fetch products
  useEffect(() => {
    const fetchData = async () => {
      if (!merchantId) return;

      try {
        const response = await axios.get(`http://ecommerce.reworkstaging.name.ng/v2/products?merchant_id=${merchantId}`);
        console.log(response)
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      }
    };

    fetchData();
  }, [merchantId]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="p-4 w-full">
      <div className="flex gap-4 flex-row">
        <h2 className="text-[19px] font-bold mb-4">Best Phone Deals </h2>
        <p className="pt-1 text-[#b9b9bc]">(692 products found)</p>
        <div className="flex pl-80">
          <p>sort by:</p>
          <p>popularity</p>
          <RiArrowDropDownLine className="text-[25px]" />
        </div>
      </div>
      <div className="flex">
        <div className="flex gap-4 mb-4">
          <button className="bg-[#b9b9bc] text-[#fb8861] p-2 h-8 pt-1">EXPRESS</button>
          <button className="bg-[#b9b9bc] text-black p-2 h-8 pt-1">Shipped from Nigeria</button>
          <div className="flex">
            <button className="bg-[#b9b9bc] text-black p-2 h-8 pt-1 ">Brand</button>
            <RiArrowDropDownLine className="text-[32px] bg-[#b9b9bc] " />
          </div>
          <div className="flex">
            <button className="bg-[#b9b9bc] text-black p-2 h-8 pt-1 ">Price </button>
            <RiArrowDropDownLine className="text-[32px] bg-[#b9b9bc] " />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link to={`/saved-product/${product.id}`} key={product.id}>
              <div
                className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 relative"
                onMouseEnter={() => setHoveredProductId(product.id)}
                onMouseLeave={() => setHoveredProductId(null)}
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-40 w-[170px] object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-opacity-0 hover:bg-opacity-10 transition duration-300"></div>
                </div>
                <h3 className="mt-2 font-semibold text-sm">{product.title}</h3>
                <p className="text-green-500">-{product.price}</p>
                <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
                {product.express && <p className="text-xs text-red-500">JUMIA EXPRESS</p>}
                <div className="mt-9">
                  <button 
                    className={`absolute bottom-0 left-0 right-0 bg-[#f68b1e] text-white py-2 rounded-b-lg transition-opacity duration-300 ${
                      hoveredProductId === product.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;