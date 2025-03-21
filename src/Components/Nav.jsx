import React, { useState, useEffect } from "react";
import { FiSearch, FiShoppingCart, FiUser, FiHelpCircle } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { FaAmazonPay, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link for navigation
import UserDropdown from "./UserDropdown";
import {
  MdPhoneIphone,
  MdHealthAndSafety,
  MdHome,
  MdDevices,
  MdShoppingBag,
  MdLocalGroceryStore,
  MdComputer,
  MdChildCare,
  MdVideogameAsset,
  MdMusicNote,
  MdCategory,
} from "react-icons/md"; // Import icons for categories
import { RiArrowDropDownLine } from "react-icons/ri";

const categories = [
  {
    name: "Phones & Tablets",
    icon: <MdPhoneIphone className="inline-block mr-2" />,
    subcategories: [
      {
        section: "SMALL APPLIANCES",
      
        items: [
          { name: "Blenders", path: "/blenders" },
          { name: "Deep Fryers", path: "/hello" },
          { name: "Juicers", path: "/juicers" },
          { name: "Air Fryers", path: "/air-fryers" },
          { name: "Rice Cookers", path: "/rice-cookers" },
          { name: "Toasters & Ovens", path: "/toasters-ovens" },
          { name: "Microwaves", path: "/microwaves" },
          { name: "Bundles", path: "/bundles" },
          { name: "Vacuum Cleaners", path: "/vacuum-cleaners" },
          { name: "Kettles", path: "/kettles" },
          { name: "Yam Pounders", path: "/yam-pounders" },
          { name: "Irons", path: "/irons" },
          { name: "Electric Cookware", path: "/electric-cookware" },
          { name: "Electric Drink Mixers", path: "/electric-drink-mixers" },
          { name: "Food Processors", path: "/food-processors" },
          { name: "Coffee Makers", path: "/coffee-makers" },
          { name: "Electric Pressure Cookers", path: "/electric-pressure-cookers" },
          

       
        ],
      },
    ],
  },
  {
    name: "Health & Beauty",
    icon: <MdHealthAndSafety className="inline-block mr-2" />,
    subcategories: [],
  },
  {
    name: "Home & Office",
    icon: <MdHome className="inline-block mr-2" />,
    subcategories: [],
  },
  {
    name: "Electronics",
    icon: <MdDevices className="inline-block mr-2" />,
    subcategories: [],
  },
  {
    name: "Fashion",
    icon: <MdShoppingBag className="inline-block mr-2" />,
    subcategories: [],
  },
  {
    name: "Supermarket",
    icon: <MdLocalGroceryStore className="inline-block mr-2" />,
    subcategories: [],
  },
  {
    name: "Computing",
    icon: <MdComputer className="inline-block mr-2" />,
    subcategories: [],
  },
  {
    name: "Baby Products",
    icon: <MdChildCare className="inline-block mr-2" />,
    subcategories: [],
  },
  {
    name: "Gaming",
    icon: <MdVideogameAsset className="inline-block mr-2" />,
    subcategories: [],
  },
  {
    name: "Musical Instruments",
    icon: <MdMusicNote className="inline-block mr-2" />,
    subcategories: [],
  },
  {
    name: "Other categories",
    icon: <MdCategory className="inline-block mr-2" />,
    subcategories: [],
  },
];

const slides = [
  {
    id: 1,
    image: "https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/01-cpr/March/Ramadan_CPR/Ramadan_cpr_712X384.jpg",
    hoverImage: "https://ng.jumia.is/cms/0-5-TechWeek/2025/generic/Desktop-Homepage-Slider_-712x384.gif",
    text: "Ramadan Special: Get 10% off select categories",
  },
  {
    id: 2,
    image: "https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/0-1Advertising/March/Nivea/HOME712x384.jpg",
    hoverImage: "https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/0-1Advertising/March/Nivea/HOME712x384.jpg",
    text: "Flash Sales - Limited Time Offers!",
  },
  {
    id: 3,
    image: "https://ng.jumia.is/cms/0-1-initiatives/jumia-global/2024/July/New-Arrival/712_x_384.png",
    hoverImage: "https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/Awoof-deals/March/06march-updated-banner/updae/712.slider.jpg",
    text: "Exclusive Tech Deals",
  },
  {
    id: 4,
    image: "https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/0-1Advertising/March/Nivea/HOME712x384.jpg",
    hoverImage: "https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/Week_10/Exclusive_Offers_For_Her/Updated/EOFH_UPDATED_712x384.png",
    text: "Super Sales - Best Discounts!",
  },
];

const Nav = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredSlide, setHoveredSlide] = useState(null);
  const [expandedCategory, setExpandedCategory] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const toggleCategory = (categoryName) => {
    if (expandedCategory === categoryName) {
      setExpandedCategory(null); // Collapse if already expanded
    } else {
      setExpandedCategory(categoryName); // Expand the clicked category
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen ">
      {/* Top Banner */}
      <div className="w-full h-15 flex justify-center bg-[#fe9900]">
        <img src="https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/Awoof-deals/March/AOTM-brands-top-strip.gif" alt="" className="h-15" />
      </div>

      {/* Top Bar */}
      <div className="bg-gray-200 text-sm py-2 px-4 flex gap-120 sticky top-0 z-1000">
        <div className="flex">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBHzRDV8FUU56u77iucJVXcQyHUhLX5YY7g&s" alt="" className="w-[20px] h-[20px] rounded-[60px] mt-[1px]" />
          <span className="text-orange-500 font-bold ">Sell on Jumia</span>
        </div>
       <div className="flex">
       <span className="text-[12px] pt-1">JUMIA PAY</span>
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBHzRDV8FUU56u77iucJVXcQyHUhLX5YY7g&s" alt="" className="w-[15px] h-[15px] rounded-[60px] mt-[3px] " />
       <FaAmazonPay  className="text-[23px] text-[#c3c3c4] mt-[3px]"/>
       </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex items-center justify-between sticky top-[41px] z-1000">
        <div className="flex">
          <h1 className="text-3xl font-bold text-black">JUMIA</h1>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBHzRDV8FUU56u77iucJVXcQyHUhLX5YY7g&s" alt="" className="w-[30px] h-[30px] rounded-[60px] mt-[4px]" />
        </div>
        <div className="flex-grow mx-4  ml-13">
          <input type="text" placeholder="Search products, brands and categories" className="w-[500px] p-2 border rounded-md" />
        </div>
        <button className="bg-orange-500 text-white px-4 py-2 rounded   ">Search</button>
        <div className="flex mr-20">
  <UserDropdown />
  <p>Account</p>
  <RiArrowDropDownLine className="text-[25px]" />
  <FiHelpCircle className="mx-4 text-xl" />
  <p>Help</p>
  <RiArrowDropDownLine className="text-[25px]" />
  <Link to="/cart" className="flex items-center">
    <FiShoppingCart className="mx-4 text-xl" />
    <p>Cart</p>
    <RiArrowDropDownLine className="text-[25px]" />
  </Link>
</div>
      </nav>

      <div className="flex flex-col md:flex-row bg-cover bg-center"
        style={{
          backgroundImage: "url('https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/Awoof-deals/March/AOTM-brands-BG-TAKEOVER.jpg')",
        }}
      >
        {/* Sidebar */}
        <div className="w-[20%] bg-white p-4 shadow-md ml-[30px] h-[20%] text-[12px] mr-4 mt-5 relative">
          {categories.map((category, index) => (
            <div key={index}>
              <div
                className="py-2 cursor-pointer hover:text-orange-500 h-[34.5px] text-[15px]"
                onClick={() => toggleCategory(category.name)}
              >
                {category.icon} {category.name}
              </div> 
              {expandedCategory === category.name && (
                <div className="absolute left-full top-0 ml-2 bg-white shadow-lg p-4 rounded-lg w-96 z-50 flex">
                  {category.subcategories.map((section, idx) => (
                    <div key={idx} className="mb-4">
                      <h3 className="font-bold text-[10px] mb-2 ">{section.section}</h3>
                      <div className="grid  pr-3">
                        {section.items.map((item, itemIdx) => (
                          <Link
                            key={itemIdx}
                            to={item.path}
                            className="text-gray-600  hover:text-yellow-500 transition-colors duration-200 select-text block"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
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
            className="w-full rounded-md transition-all duration-500 ease-in-out transform hover:scale-105 h-103"
            onMouseEnter={() => setHoveredSlide(currentSlide)}
            onMouseLeave={() => setHoveredSlide(null)}
          />
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full" onClick={nextSlide}>
            <FaAngleRight />
          </button>
        </div>

        {/* Right Section with Image */}
        <div className="mt-[232px] w-[271px] ml-[14px] ">
          <img src="https://ng.jumia.is/cms/0-1-initiatives/jforce/2025/JFORCE-2.gif" alt="" className="w-[95%] ml-1" />
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="absolute top-20 left-227 bg-white p-4 shadow-md w-59 mt-[117px] h-50  ">
        <div className="flxe gap-[20px]">
          <div className="flex items-center space-x-2 bg-no-repeat bg-left pl-8"
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
          <div className="flex items-center space-x-2 bg-no-repeat bg-left pl-8"
            style={{
              backgroundImage: "url('https://ng.jumia.is/cms/0-1-homepage/bsb/icone-seller-1.png')",
              backgroundSize: "34px",
            }}
          >
            <div className="pl-[6px]">
              <p>Sell on Jumia</p>
              <p className="text-gray-600 text-sm">0700-600-0000, 0201888...</p>
            </div>
          </div>
        </div>
        <div className="flxe mt-5">
          <div className="flex items-center space-x-2 bg-no-repeat bg-left pl-8"
            style={{
              backgroundImage: "url('https://ng.jumia.is/cms/0-1-homepage/bsb/icone-2-return.png')",
              backgroundSize: "34px",
            }}
          >
            <div className="pl-[6px]">
              <p>Best Deals</p>
              <p className="text-gray-600 text-sm">0700-600-0000, 0201888...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;