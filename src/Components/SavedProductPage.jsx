import { useEffect, useState } from "react";
import { CiFacebook, CiStar } from "react-icons/ci";
import {
  FaAmazonPay,
  FaBars,
  FaQuestionCircle,
  FaRegFileAlt,
  FaSearch,
  FaShoppingCart,
  FaTruck,
  FaUndo,
  FaUser,
} from "react-icons/fa";
import { FaBox, FaXTwitter } from "react-icons/fa6";
import { MdOutlineAddShoppingCart, MdOutlineWhatsapp } from "react-icons/md";
import { useParams } from "react-router-dom";
import Spon from "./Spon";
import Specifications from "./Specifications";
import { LuMessageSquareMore } from "react-icons/lu";
import Footer from "./Footer";
import JumiaFooter from "./JumiaFooter";
import axios from "axios";
import { IoPaperPlaneOutline } from "react-icons/io5";

const SavedProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [cart, setCart] = useState([]); // State to store cart items
  const [isCartVisible, setIsCartVisible] = useState(false); // State to manage cart visibility

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://ecommerce.reworkstaging.name.ng/v2/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div>
      <div className="bg-[#ff9900]">
        <img
          src="https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/Awoof-deals/March/AOTM-brands-top-strip.gif"
          alt=""
        />
      </div>

      <div className="bg-gray-200 text-sm py-2 px-4 flex gap-120">
        <div className="flex">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBHzRDV8FUU56u77iucJVXcQyHUhLX5YY7g&s"
            alt=""
            className="w-[20px] h-[20px] rounded-[60px] mt-[1px]"
          />
          <span className="text-orange-500 font-bold">Sell on Jumia</span>
        </div>
        <span>JUMIA PAY</span>
      </div>

      <nav className="bg-white shadow-md p-4 flex items-center justify-between">
        <div className="flex">
          <h1 className="text-3xl font-bold text-black">JUMIA</h1>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBHzRDV8FUU56u77iucJVXcQyHUhLX5YY7g&s"
            alt=""
            className="w-[30px] h-[30px] rounded-[60px] mt-[4px]"
          />
        </div>
        <div className="flex-grow mx-4 flex ">
          <input
            type="text"
            placeholder="Search products, brands and categories"
            className="w-[500px] p-2 border rounded-md"
          />
          <button className="bg-orange-500 text-white px-4 py-2 rounded ml-6">
            Search
          </button>
          <div className="left-50">
            <div className="flex">
              <div className="flex w-[40px] h-[40px] pl-4">
                <img
                  src="https://img.icons8.com/?size=160&id=111473&format=png"
                  alt=""
                />
                <div className="flex pt-1">
                  <p>Account</p>
                  <img
                    src="https://img.icons8.com/?size=48&id=85018&format=png"
                    alt=""
                    className="w-[30px] h-[30px]"
                  />
                </div>
              </div>
              <div className="flex w-[140px] h-[25px] pl-28 mt-1">
                <img
                  src="https://img.icons8.com/?size=48&id=P1vw9TOlNU9J&format=png"
                  alt=""
                />
                <div className="flex">
                  <p className="pl-2">Help</p>
                  <img
                    src="https://img.icons8.com/?size=48&id=85018&format=png"
                    alt=""
                    className="w-[30px] h-[30px]"
                  />
                </div>
              </div>
              <div className="flex w-[140px] h-[25px] pl-25 mt-1 relative">
                <img
                  src="https://img.icons8.com/?size=160&id=aZsKG9nycGwi&format=png"
                  alt=""
                  onClick={toggleCartVisibility} // Toggle cart visibility on click
                  className="cursor-pointer"
                />
                <span className="absolute top-0 right-0 bg-orange-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {cart.length} {/* Display cart item count */}
                </span>
                <p className="pl-2">Cart</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      

      <div className="p-4 bg-gray-100 min-h-screen w-[100%]">
        <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row w-[100%]">
          <div className="md:w-2/3">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-[270px]">
                <img
                  src={product?.images}
                  alt={product?.title}
                  className="w-full h-114 object-cover rounded-lg"
                />
                <h2>Share this product</h2>
                <div className="flex text-[25px] gap-3 pt-3">
                  <CiFacebook />
                  <FaXTwitter />
                  <MdOutlineWhatsapp />
                </div>
                <p className="mt-25 text-[#4866a7] text-sm">
                  Report incorrect product information
                </p>
              </div>
              <div className="md:w-[469px] md:pl-6">
                <div className="flex gap-2">
                  <button className="bg-[#46778a] text-white text-[12px]">
                    Official Store
                  </button>
                  <button className="bg-[#42b6c2] text-white text-[12px]">
                    Non-returnable
                  </button>
                </div>
                <h2 className="text-[20px] mt-4">{product?.title}</h2>
                <div className="flex">
                  <p className="text-gray-600 text-sm mt-2">Brand: </p>
                  <p className="text-[#4b68a8] text-sm mt-2">
                    Skyrun | Similar products from Skyrun Walker
                  </p>
                </div>
                <div className="mt-4">
                  <p className="text-orange-500 font-bold text-2xl">
                    ₦{product.price}
                  </p>
                  <p className="text-[#c49f52] text-sm">Few units left</p>
                  <p className="text-sm pt-2 pb-2">
                    + shipping from{" "}
                    <span className="text-amber-300"> ₦ 860</span> to LEKKI-AJAH
                    (SANGOTEDO)
                  </p>
                  <p className="text-gray-400 line-through">
                    ₦{product?.oldPrice}
                  </p>
                  <p className="text-green-500 text-sm">-{product.discount}</p>
                </div>
                <div className="mt-4">
                  <p>⭐⭐⭐⭐⭐</p>
                  <p className="text-sm text-gray-600">In stock</p>
                  <p className="text-sm text-gray-600">
                    + shipping from ₦12,010 to LEKKI-AJAH (SANGOTEDO)
                  </p>
                </div>
                <div className="mt-4">
                  <button
                    className="w-full bg-[#f68b1e] text-white py-2 rounded-lg text-[20px] flex gap-35 justify-center items-center"
                    onClick={handleAddToCart}
                    disabled={loading}
                  >
                    {loading ? (
                      <div className="flex items-center">
                        <span className="mr-2">Adding...</span>
                        <div
                          className="spinner-border animate-spin inline-block w-4 h-4 border-2 rounded-full"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    ) : (
                      <>
                        <MdOutlineAddShoppingCart className="text-[29px] pl-2" />{" "}
                        Add to cart
                      </>
                    )}
                  </button>
                  {addedToCart && (
                    <p className="text-green-500 text-sm mt-2">
                      Added successfully!
                    </p>
                  )}
                </div>
                <p className="text-black text-[17px] pt-2">Promotions</p>
                <div className="mt-4">
                  <div className="flex items-center">
                    <CiStar className="text-[#f68b1e] text-[27px]" />
                    <p className="text-sm text-[#4b68a8] ml-2 ">
                      Call 07006000000 To Place Your Order
                    </p>
                  </div>
                  <div className="flex items-center mt-2">
                    <CiStar className="text-[#f68b1e] text-[27px]" />
                    <p className="text-sm text-[#4b68a8] ml-2">
                      Need extra money? Loan up to N500,000 on the JumiaPay
                      Android app.
                    </p>
                  </div>
                  <div className="flex items-center mt-2">
                    <CiStar className="text-[#f68b1e] text-[27px]" />
                    <p className="text-sm text-[#4b68a8] ml-2">
                      Enjoy cheaper shipping fees when you select a PickUp
                      Station at checkout.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Spon />
            <Specifications />
            <Spon />
            <div>
              <div className="flex">
                <div className="p-4 bg-white mt-6 flex gap-15">
                  <div className="bg-white shadow-md rounded-lg p-4 w-fit">
                    <h2 className="text-xl font-bold mb-4">
                      VERIFIED RATINGS (65)
                    </h2>
                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        <span className="text-2xl font-bold">4.3/5</span>
                        <div className="ml-2 text-yellow-500">★★★★★</div>
                      </div>
                      <p className="text-gray-600">65 verified ratings</p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500">★★★★★</span>
                      <span className="ml-2">5 ★ (43)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500">★★★★☆</span>
                      <span className="ml-2">4 ★ (10)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500">★★★☆☆</span>
                      <span className="ml-2">3 ★ (3)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500">★★☆☆☆</span>
                      <span className="ml-2">2 ★ (5)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500">★☆☆☆☆</span>
                      <span className="ml-2">1 ★ (4)</span>
                    </div>
                  </div>

                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-2">
                      COMMENTS FROM VERIFIED PURCHASES (13)
                    </h3>

                    <div className="mb-4">
                      <div className="flex items-center mb-1">
                        <div className="text-yellow-500">★★★★★</div>
                        <span className="ml-2 font-bold">
                          Johnnie Walker flask
                        </span>
                      </div>
                      <p className="text-gray-600">Efficient</p>
                      <p className="text-sm text-gray-500">
                        27-01-2025 by Mahmud
                      </p>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center mb-1">
                        <div className="text-yellow-500">★★★★★</div>
                        <span className="ml-2 font-bold">
                          Premiumbut expensive
                        </span>
                      </div>
                      <p className="text-gray-600">Premium drink</p>
                      <p className="text-sm text-gray-500">
                        02-12-2024 by PAUL
                      </p>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center mb-1">
                        <div className="text-yellow-500">★★★★★</div>
                        <span className="ml-2 font-bold">So cool</span>
                      </div>
                      <p className="text-gray-600">Very cool</p>
                      <p className="text-sm text-gray-500">
                        25-11-2024 by Prince Emekpe
                      </p>
                    </div>

                    <div className="mt-4">
                      <p className="text-blue-500 cursor-pointer">See All</p>
                      <p className="text-sm text-gray-500">Verified Purchase</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Spon />
          </div>

          <div className="md:w-[320px] md:pl-8 mt-6 md:mt-0">
            <div className="bg-gray-50 p-4 rounded-lg ">
              <h3 className="text-[15px] font-semibold">DELIVERY & RETURNS</h3>
              <div className="flex text-[15px] mt-2 mb-2">
                <p className="text-gray-600">JUMIA</p>
                <p className="text-[#ff7649]">EXPRESS</p>
              </div>
              <p className="text-[12px] text-gray-600">
                The BEST products, delivered faster. Now PAY on DELIVERY, Cash
                or Bank Transfer Anywhere, Zero Wahala! Details
              </p>
              <div className="mt-4">
                <p className="text-black font-semibold">Choose your location</p>
                <select className="w-full p-2 border rounded-lg mt-2">
                  <option>Lagos</option>
                  <option>LEKKI-AJAH (SANGOTEDO)</option>
                  <option>LEKKI-AJAH (SANGOTEDO)</option>
                  <option>LEKKI-AJAH (SANGOTEDO)</option>
                  <option>LEKKI-AJAH (SANGOTEDO)</option>
                  <option>LEKKI-AJAH (SANGOTEDO)</option>
                  <option>LEKKI-AJAH (SANGOTEDO)</option>
                  <option>LEKKI-AJAH (SANGOTEDO)</option>
                </select>
                <select className="w-full p-2 border rounded-lg mt-2">
                  <option>LEKKI-AJAH (SANGOTEDO)</option>
                  <option>LEKKI-AJAH (SANGOTEDO)</option>
                  <option>LEKKI-AJAH (SANGOTEDO)</option>
                  <option>LEKKI-AJAH (SANGOTEDO)</option>
                  <option>LEKKI-AJAH (SANGOTEDO)</option>
                  <option>LEKKI-AJAH (SANGOTEDO)</option>
                </select>
              </div>
              <div className="mt-4 ">
                <div className="mb-4 flex items-start">
                  <div className="mr-2">
                    <FaBox className="text-blue-500 text-xl" />{" "}
                    {/* Icon for Pickup Station */}
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold">Pickup Station</p>
                    <p className="text-sm text-gray-600">
                      Delivery Fees <span className="font-bold">¥ 860</span>
                    </p>
                    <p className="text-sm text-gray-600">
                      Ready for pickup between 13 March and 14 March if you
                      place your order within the next 22hrs 36mins
                    </p>
                  </div>
                  <span className="text-blue-500 ml-auto">Details </span>
                </div>
              </div>
            </div>
            <div className="p-4 bg-white shadow-md rounded-lg">
              <h2 className="text-[10px] font-bold mb-4">SELLER INFORMATION</h2>

              <span className="text-[13px] font-semibold">Jumia</span>
              <p className=" text-[13px]  text-green-500">100% Seller Score</p>
            </div>
            <div className="p-4 bg-white shadow-md rounded-lg">
              <button className="text-[13px] font-bold  p-4 bg-[#d4d4d6] flex gap-5 pr-27">
                {" "}
                <FaRegFileAlt className="text-[17px] " />
                Product details
              </button>

              <div className="mb-6">
                <button className="text-[13px] font-bold mb-1 mt-1 p-4 bg-[#d4d4d6] flex gap-5 pr-29">
                  {" "}
                  <FaRegFileAlt className="text-[17px] " />
                  Specifications
                </button>

                <button className="text-[13px] font-bold  p-4 bg-[#d4d4d6] flex gap-5 pr-7">
                  {" "}
                  <FaRegFileAlt className="text-[17px] " />
                  Verified Customer Feedback
                </button>
              </div>

              <div className="mb-6">
                <div className=" items-center mb-2 flex">
                  <img
                    src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/89/6122752/1.jpg?8828"
                    alt=""
                    className="w-[90px] h-30"
                  />
                  <div>
                    <p className="text-[13px] font-bold">
                      Johnnie Walker Red Poc...
                    </p>
                    <p className="ml-2 text-green-500">5,800</p>
                  </div>
                </div>
                <button className="w-full bg-[#f68b1e] text-white py-2 rounded-lg text-[17px] flex gap-15">
                  <MdOutlineAddShoppingCart className="text-[29px] pl-2" /> Add
                  to cart
                </button>
              </div>

              {/* Questions Section */}
              <div className="bg-white shadow-md rounded-lg p-4 w-fit">
                <div>
                  <h3 className="text-[12px] font-semibold mb-2 pl-10">
                    Questions about this product?
                  </h3>
                  <div className="flex items-center pl-19">
                    <LuMessageSquareMore className="text-[#f68f26] text-[18px]" />
                    <p className="ml-2 text-[#f68f26] text-[20px]">Chat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <JumiaFooter />
      </div>
      <Footer />
    </div>
  );
};

export default SavedProductPage;
