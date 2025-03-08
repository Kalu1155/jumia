import React from "react";

const sponsoredProducts = [
  {
    title: "NIVEA Perfect & Radiant Set",
    image: "https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/Week_10/Exclusive_Offers_For_Her/phones_300x400.png",
    oldPrice: 29550,
    newPrice: 20160,
    discount: 32,
  },
  {
    title: "Silver Crest 2L Industrial Blender",
    image: "https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/Week_10/Exclusive_Offers_For_Her/Smartwatch_300x400.png",
    oldPrice: 27031,
    newPrice: 24900,
    discount: 8,
  },
  {
    title: "Hollyland Lark M2 Wireless Mic",
    image: "https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/Week_10/Exclusive_Offers_For_Her/Blender_300x400.png",
    oldPrice: 185010,
    newPrice: 185000,
    discount: 1,
  },
  {
    title: "Berrykey 2-in-1 Men's Outfit",
    image: "https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/Week_10/Exclusive_Offers_For_Her/Beauty_Lover_300x400.png",
    oldPrice: 28000,
    newPrice: 23000,
    discount: 18,
  },
  {
    title: "Men's Leather Strap Watch",
    image: "https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/Week_10/Exclusive_Offers_For_Her/women_fashion_300x400.png",
    oldPrice: 14027,
    newPrice: 8416,
    discount: 40,
  },
  {
    title: "Aojexor Corner Shelves",
    image: "https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/Week_10/Exclusive_Offers_For_Her/Gym-Enthusiast_300x400.png",
    oldPrice: 18627,
    newPrice: 9500,
    discount: 49,
  },
];

const Sponsored2 = () => {
  return (
    <div className="bg-[#fe9900] pt-5">
    <div className="bg-white p-6 w-[95%] ml-8  ">
      <h2 className="text-2xl font-bold mb-4 text-center">Sponsored products</h2>
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

export default Sponsored2;
