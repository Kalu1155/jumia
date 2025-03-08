import React from "react";

const deals = [
  {
    title: "TV & Audio Deals",
    image: "https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/electronics.png",
  },
  {
    title: "New Arrival",
    image: "https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/7.gif",
  },
  {
    title: "Up to 80% Off",
    image: "https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/7.gif",
  },
  {
    title: "Phones & Tablets Deals",
    image: "https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/phones.png",
  },
  {
    title: "Appliances Deals",
    image: "https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/appliances.png",
  },
  {
    title: "Fashion & Beauty Deals",
    image: "https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/fashion.png",
  },
];

const DealsSection = () => {
  return (
    <div
      className="pt-3"
      style={{
        backgroundImage:
          "url('https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/Awoof-deals/March/AOTM-brands-BG-TAKEOVER.jpg')",
      }}
    >
      <div className=" flex  bg-white p-4 gap-5 w-[96%] ml-10">
        {deals.map((deal, index) => (
          <div key={index} className="bg-white shadow-lg  w-[180px]">
            <img
              src={deal.image}
              alt={deal.title}
              className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-3 text-center">
              <h3 className="text-lg font-semibold">{deal.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsSection;
