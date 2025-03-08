import React from "react";

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

const SponsoredProducts = () => {
  return (
    <div className="bg-[#fe9900] pt-5">
    <div className="bg-white p-6 w-[95%] ml-8  ">
      <h2 className="text-2xl font-bold mb-4">Sponsored products</h2>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide p-2">
        {sponsoredProducts.map((product, index) => (
          <div
            key={index}
            className="min-w-[200px] shadow-lg rounded-lg p-3 hover:scale-105 transition-transform bg-gray-100"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.title}
                className="h-52 w-44 object-cover rounded"
              />
              <span className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 text-xs rounded">
                -{product.discount}%
              </span>
            </div>
            <h3 className="text-sm font-semibold mt-2">{product.title}</h3>
            <p className="text-lg font-bold text-black">₦ {product.newPrice.toLocaleString()}</p>
            <p className="text-gray-500 line-through text-sm">₦ {product.oldPrice.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}; 

export default SponsoredProducts;
