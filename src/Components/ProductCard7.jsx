import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ProductCard7 = ({ product }) => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  const handleSaveProduct = () => {
    localStorage.setItem("savedProduct", JSON.stringify(product));
    navigate("/saved-product");
  };

  return (
    <div
      className="border p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition relative"
      onClick={handleSaveProduct}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={product.image} alt={product.title} className="w-full h-40 object-cover" />
      <h3 className="mt-2 font-semibold text-sm">{product.title}</h3>
      <p className="text-orange-500 font-bold">₦{product.price.toLocaleString()}</p>
      <p className="text-gray-400 line-through">₦{product.oldPrice.toLocaleString()}</p>
      <p className="text-green-500">-{product.discount}</p>
      <p className="text-yellow-500">⭐⭐⭐⭐⭐ {product.rating}</p>
      {product.express && <p className="text-xs text-red-500">JUMIA EXPRESS</p>}
      
      <div className="ml-4 pt-2">
      {hovered && (
        <button className="bg-[#f68b1e] pl-5 pr-5 pt-2 pb-2 " >
          Add to Cart
        </button>
      )}
      </div>
    </div>
  );
};

export default ProductCard7;
