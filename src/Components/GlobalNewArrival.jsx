import React from "react";

const categories = [
  { title: "Gadgets & Computing" },
  { title: "Women's Fashion" },
  { title: "DIY & Fitness" },
  { title: "Self Care" },
  { title: "Men's Fashion" },
  { title: "Home Essentials" },
];

const GlobalNewArrival = () => {
  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4">Global New Arrival</h2>
      <div className="grid grid-cols-3 gap-5">
        {categories.map((category, index) => (
          <div key={index} className="bg-gray-300 w-full h-40 rounded-md flex items-center justify-center">
            <span className="text-lg font-semibold">{category.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlobalNewArrival;
