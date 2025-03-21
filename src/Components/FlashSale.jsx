import React, { useState, useEffect } from "react";
import { GoChevronRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";

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

const FlashSale = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({
    hours: 9,
    minutes: 2,
    seconds: 13,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds -= 1;
        } else {
          if (minutes > 0) {
            minutes -= 1;
            seconds = 59;
          } else {
            if (hours > 0) {
              hours -= 1;
              minutes = 59;
              seconds = 59;
            } else {
              clearInterval(timer);
              return { hours: 0, minutes: 0, seconds: 0 };
            }
          }
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleProductClick = () => {
    navigate("/hello");
  };

  return (
    <div className="bg-[#e95c00] pt-5">
      <div className="bg-red-600 text-white p-4 w-[95%] mx-auto rounded-lg">
        <div className="flex justify-between ">
        <h2 className="text-xl font-bold mt-2 ">⚡ Flash Sale</h2>
          <p className="text-[20px] font-semibold ">
            Time Left: {String(timeLeft.hours).padStart(2, "0")}h :{" "}
            {String(timeLeft.minutes).padStart(2, "0")}m :{" "}
            {String(timeLeft.seconds).padStart(2, "0")}s
          </p>
          <div className="flex">

         <p>See All </p>
         <GoChevronRight className="text-[24px]"/>
          </div>
        </div>
        <div className="flex gap-4 overflow-x-auto p-4 bg-white rounded-md mt-2">
          {products.map((product, index) => (
            <div
              key={index}
              onClick={handleProductClick}
              className="min-w-[200px] shadow-lg rounded-lg p-3 hover:scale-105 transition-all duration-300 hover:shadow-xl text-center cursor-pointer"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-52 object-cover rounded w-[300px]"
              />
              <h3 className="text-sm font-semibold mt-2 text-gray-800">
                {product.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlashSale;