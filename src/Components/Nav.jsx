import React, { useState, useEffect } from "react";
import { FiSearch, FiShoppingCart, FiUser, FiHelpCircle } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const categories = [
  "Appliances", "Phones & Tablets", "Health & Beauty", "Home & Office",
  "Electronics", "Fashion", "Supermarket", "Computing", "Baby Products",
  "Gaming", "Musical Instruments", "Other categories",
];

const slides = [
  { id: 1, image: "https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/01-cpr/March/Ramadan_CPR/Ramadan_cpr_712X384.jpg", hoverImage: "https://ng.jumia.is/cms/0-5-TechWeek/2025/generic/Desktop-Homepage-Slider_-712x384.gif", text: "Ramadan Special: Get 10% off select categories" },
  { id: 2, image: "https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/0-1Advertising/March/Nivea/HOME712x384.jpg", hoverImage: "https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/0-1Advertising/March/Nivea/HOME712x384.jpg", text: "Flash Sales - Limited Time Offers!" },
  { id: 3, image: "https://ng.jumia.is/cms/0-1-initiatives/jumia-global/2024/July/New-Arrival/712_x_384.png", hoverImage: "https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/Awoof-deals/March/06march-updated-banner/updae/712.slider.jpg", text: "Exclusive Tech Deals" },
  { id: 4, image: "https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/0-1Advertising/March/Nivea/HOME712x384.jpg", hoverImage: "https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/Week_10/Exclusive_Offers_For_Her/Updated/EOFH_UPDATED_712x384.png", text: "Super Sales - Best Discounts!" },
];

const Nav = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredSlide, setHoveredSlide] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Top Banner */}
      <div className="w-full h-20 flex justify-center bg-[#fe9900]">
        <img src="https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/Awoof-deals/March/AOTM-brands-top-strip.gif" alt="" className="h-15" />
      </div>

      {/* Top Bar */}
      <div className="bg-gray-200 text-sm py-2 px-4 flex gap-120 ">
        <div className="flex">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBHzRDV8FUU56u77iucJVXcQyHUhLX5YY7g&s" alt=""  className="w-[20px] h-[20px] rounded-[60px] mt-[1px]"/>
        <span className="text-orange-500 font-bold">Sell on Jumia</span>
        </div>
        <span>JUMIA PAY</span>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex items-center justify-between">
        <div className="flex">
        <h1 className="text-3xl font-bold text-black">JUMIA</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBHzRDV8FUU56u77iucJVXcQyHUhLX5YY7g&s" alt=""  className="w-[30px] h-[30px] rounded-[60px] mt-[4px]"/>
        </div>
        <div className="flex-grow mx-4">
          <input type="text" placeholder="Search products, brands and categories" className="w-full p-2 border rounded-md" />
        </div>
        <button className="bg-orange-500 text-white px-4 py-2 rounded">Search</button>
        <FiUser className="mx-4 text-xl" />
        <FiHelpCircle className="mx-4 text-xl" />
        <FiShoppingCart className="mx-4 text-xl" />
      </nav>

      <div  className="flex flex-col md:flex-row bg-cover bg-center "
        style={{
          backgroundImage:
            "url('https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/Awoof-deals/March/AOTM-brands-BG-TAKEOVER.jpg')",
         
        }}
      >
        {/* Sidebar */}
        <div className="w-[20%] bg-white p-4 shadow-md ml-[30px] h-[30%] text-[12px] mr-4 mt-5">
          {categories.map((category, index) => (
            <p key={index} className="py-2 cursor-pointer hover:text-orange-500 h-[33px]">
              {category}
            </p>
          ))}
        </div>

        {/* Carousel */}
        <div className="w-[60%] relative overflow-hidden h-[45%] mt-5">
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full" onClick={prevSlide}>
            <FaAngleLeft />
          </button>
          <img
            src={hoveredSlide === currentSlide ? slides[currentSlide].hoverImage : slides[currentSlide].image}
            alt="slide"
            className="w-full rounded-md transition-all duration-500 ease-in-out transform hover:scale-105 h-108"
            onMouseEnter={() => setHoveredSlide(currentSlide)}
            onMouseLeave={() => setHoveredSlide(null)}
          />
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full" onClick={nextSlide}>
            <FaAngleRight />
          </button>
        </div>

        {/* Right Section with Image */}
        <div className="mt-[230px] w-[300px] ml-[10px]">
          <img src="https://ng.jumia.is/cms/0-1-initiatives/jforce/2025/JFORCE-2.gif" alt="" className="w-[95%]" />
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="absolute top-20 right-4 bg-white p-4 shadow-md w-65 mt-[130px] h-50">
        <div className="flxe gap-[20px]">
        <div   className="flex items-center space-x-2 bg-no-repeat bg-left pl-10"
          style={{
            backgroundImage: "url('https://ng.jumia.is/cms/0-1-homepage/bsb/phone-icon-1.png')",
            backgroundSize: "34px",
          }}
        >
         <div className="pl-[6px]">
         <p>CALL TO ORDER</p>
         <p className="text-gray-600 text-sm">0700-600-0000, 0201888...</p>
         </div>
          
        </div>
        </div>
        <div className="flxe mt-5">
        <div   className="flex items-center space-x-2 bg-no-repeat bg-left pl-10"
          style={{
            backgroundImage: "url('https://ng.jumia.is/cms/0-1-homepage/bsb/icone-seller-1.png')",
            backgroundSize: "34px",
          }}
        >
         <div className="pl-[6px]">
         <p>CALL TO ORDER</p>
         <p className="text-gray-600 text-sm">0700-600-0000, 0201888...</p>
         </div>
          
        </div>
        </div>
        <div className="flxe mt-5">
        <div   className="flex items-center space-x-2 bg-no-repeat bg-left pl-10"
          style={{
            backgroundImage: "url('https://ng.jumia.is/cms/0-1-homepage/bsb/icone-2-return.png')",
            backgroundSize: "34px",
          }}
        >
         <div className="pl-[6px]">
         <p>CALL TO ORDER</p>
         <p className="text-gray-600 text-sm">0700-600-0000, 0201888...</p>
         </div>
          
        </div>
        </div>
      </div>
       
     
    </div>
  );
};


export default Nav;
