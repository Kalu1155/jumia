import React, { useEffect, useState } from "react";

const products = [
  {
    title: "SOLITEC STANDING FAN",
    image: "https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/electronics.png",
    oldPrice: 19328,
    newPrice: 16990,
    discount: 12,
    stockLeft: 320,
  },
  {
    title: "Hisense 20 Litres Microwave",
    image: "https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/appliances.png",
    oldPrice: 101755,
    newPrice: 87720,
    discount: 14,
    stockLeft: 11,
  },
  {
    title: "128GB Pendrive",
    image: "https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/phones.png",
    oldPrice: 9300,
    newPrice: 6399,
    discount: 31,
    stockLeft: 9,
  },
  {
    title: "Onleeu Long Lasting Perfume",
    image: "https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/7.gif",
    oldPrice: 8905,
    newPrice: 5650,
    discount: 37,
    stockLeft: 40,
  },
  {
    title: "Lauber WM - Black Sneakers",
    image: "https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/fashion.png",
    oldPrice: 18890,
    newPrice: 12599,
    discount: 33,
    stockLeft: 118,
  },
  {
    title: "Silver Crest Blender 2L",
    image: "https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/groceries.png",
    oldPrice: 27031,
    newPrice: 24900,
    discount: 8,
    stockLeft: 349,
  },
];

const categories = [
  {
    title: "Up to 50% Off",
    image: "https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/BUY-2_updated.gif",
  },
  {
    title: "Beauty Deals",
    image: "https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/beauty.png",
  },
  {
    title: "Home Essentials",
    image: "https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/home-essentials.png",
  },
  {
    title: "Beverages",
    image: "https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/groceries.png",
  },
  {
    title: "Special Offer",
    image: "https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/special-offer.png",
  },
  {
    title: "Up to 80% Off",
    image: "https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/essential-week.png",
  },
];

const FlashSale = () => {
  const [timeLeft, setTimeLeft] = useState(6 * 3600 + 56 * 60 + 47); // 6h 56m 47s in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, "0")}h : ${m.toString().padStart(2, "0")}m : ${s.toString().padStart(2, "0")}s`;
  };

  return (
    <div className="bg-[#e95c00] pt-5">
      {/* Flash Sale Section */}
      <div className="bg-red-600 text-white p-4 w-[95%] mx-auto rounded-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold flex items-center">⚡ Flash Sale</h2>
          <p className="text-lg font-semibold">Time Left: {formatTime(timeLeft)}</p>
          <button className="text-sm underline">See All &gt;</button>
        </div>

        {/* Product List */}
        <div className="flex gap-4 overflow-x-auto p-4 bg-white rounded-md mt-2">
          {products.map((product, index) => (
            <div
              key={index}
              className="min-w-[200px] shadow-lg rounded-lg p-3 hover:scale-105 transition-all duration-300 hover:shadow-xl text-center"
            >
              <div className="relative">
                <img src={product.image} alt={product.title} className="h-52 object-cover rounded w-[300px]" />
                <span className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 text-xs rounded">
                  -{product.discount}%
                </span>
              </div>
              <h3 className="text-sm font-semibold mt-2 text-gray-800">{product.title}</h3>
              <p className="text-lg font-bold text-black">₦ {product.newPrice.toLocaleString()}</p>
              <p className="text-gray-500 line-through text-sm">₦ {product.oldPrice.toLocaleString()}</p>
              <p className="text-xs text-gray-600">{product.stockLeft} items left</p>
              <div className="w-full h-1 bg-gray-300 rounded overflow-hidden mt-1">
                <div className="h-full bg-orange-500" style={{ width: `${(product.stockLeft / 400) * 100}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="w-[95%] mx-auto mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 bg-white p-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-xl"
          >
            <img src={category.image} alt={category.title} className="w-[260px] h-55 object-cover" />
            <div className="p-2 text-center">
              <p className="text-sm font-semibold text-gray-800">{category.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashSale;
