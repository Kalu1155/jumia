import React from "react";

const products = [
  {
    name: "Johnnie Walker Black Label",
    price: 11935,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/58/4294593/1.jpg?1551",
  },
  {
    name: "Jameson Irish Whiskey",
    price: 8190,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/60/660869/1.jpg?1463",
  },
  {
    name: "Johnnie Walker Gold Label",
    price: 69600,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/28/4294593/1.jpg?1348",
  },
  {
    name: "Johnnie Walker Black Label 12",
    price: 46300,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/57/4294593/1.jpg?1216",
  },
  {
    name: "Imperial Blue Whisky",
    price: 4340,
    oldPrice: 4861,
    discount: "-11%",
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/07/460869/1.jpg?6318",
  },
  {
    name: "Johnnie Walker Blue Label",
    price: 467800,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/87/4294593/1.jpg?1270",
  },
];

const Spon = () => {
  return (
    <div className="">
      <h2 className="text-lg font-semibold mb-4">Sponsored products</h2>
      <div className="flex overflow-x-auto gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative  p-3 rounded-lg w-35 shrink-0"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-32 object-cover rounded-md"
            />
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-1 py-0.5 rounded-md">
              18+
            </span>
            {product.discount && (
              <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-1 py-0.5 rounded-md">
                {product.discount}
              </span>
            )}
            <p className="text-sm font-medium mt-2 truncate">{product.name}</p>
            <p className="text-md font-semibold text-black">₦ {product.price.toLocaleString()}</p>
            {product.oldPrice && (
              <p className="text-xs text-gray-500 line-through">₦ {product.oldPrice.toLocaleString()}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Spon;
