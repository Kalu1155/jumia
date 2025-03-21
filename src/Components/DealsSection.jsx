import React from "react";
import { useNavigate } from "react-router-dom";

const deals = [
  {
    title: "TV & Audio Deals",
    image: "https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/electronics.png",
    price: 250000, // Example price
    oldPrice: 300000,
  },
  {
    title: "New Arrival",
    image: "https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/7.gif",
    price: 100000,
  },
  {
    title: "Up to 80% Off",
    image: "https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/7.gif",
    price: 50000,
  },
  {
    title: "Phones & Tablets Deals",
    image: "https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/phones.png",
    price: 120000,
    oldPrice: 150000,
  },
  {
    title: "Appliances Deals",
    image: "https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/appliances.png",
    price: 80000,
  },
  {
    title: "Fashion & Beauty Deals",
    image: "https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/fashion.png",
    price: 25000,
  },
];

const DealsSection = () => {
  const navigate = useNavigate();

  const handleClick = (deal) => {
    // Get existing cart from localStorage
    const storedDeals = JSON.parse(localStorage.getItem("cart")) || [];

    const isAlreadyInCart = storedDeals.some((item) => item.title === deal.title);
    
    if (!isAlreadyInCart) {
      const updatedDeals = [...storedDeals, deal]; 
      localStorage.setItem("cart", JSON.stringify(updatedDeals)); 
    }

    navigate(`/Hello`);
  };

  return (
    <div className="pt-6 bg-[#fdb801] "
    >
      <div className="flex bg-white p-4 gap-5 w-[96%] ml-10">
        {deals.map((deal, index) => (
          <div
            key={index}
            className="bg-white shadow-lg w-[180px] cursor-pointer"
            onClick={() => handleClick(deal)}
          >
            <img
              src={deal.image}
              alt={deal.title}
              className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-3 text-center">
              <h3 className="text-lg font-semibold">{deal.title}</h3>
              <p className="text-gray-700 font-bold">₦{deal.price}</p>
              {deal.oldPrice && <p className="text-gray-500 line-through text-sm">₦{deal.oldPrice}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsSection;
