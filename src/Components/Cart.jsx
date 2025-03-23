import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Cart = () => {
    const [product, setProduct] = useState([])
    const [cart, setCart] = useState([]); // State to store cart items
    const [isCartVisible, setIsCartVisible] = useState(false); // State to manage cart visibility
     useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
      }, [cart]);

      const admin = JSON.stringify(localStorage.getItem('admin'))
      const id = admin.id
    
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
      }, []);
    
      // Add product to cart
      const handleAddToCart = () => {
        setLoading(true); // Start loading
    
        // Simulate an async operation (e.g., API call)
        setTimeout(() => {
          const existingProductIndex = cart.findIndex((item) => item.id === product.id);
    
          if (existingProductIndex !== -1) {
            // If product already exists in cart, increase its quantity
            const updatedCart = [...cart];
            updatedCart[existingProductIndex].quantity += 1;
            updatedCart[existingProductIndex].price =
              updatedCart[existingProductIndex].originalPrice *
              (1 - updatedCart[existingProductIndex].discount / 100) *
              updatedCart[existingProductIndex].quantity;
            setCart(updatedCart);
          } else {
            // If product is not in cart, add it with quantity 1
            const newProduct = {
              ...product,
              quantity: 1,
              price: product.originalPrice * (1 - product.discount / 100), // Calculate price based on discount
            };
            setCart((prevCart) => [...prevCart, newProduct]);
          }
    
          setLoading(false); // Stop loading
          setAddedToCart(true); // Show success message
          setTimeout(() => {
            setAddedToCart(false); // Hide success message after 3 seconds
          }, 3000);
        }, 1000); // Simulate a 1-second delay
      };
    
      // Increase quantity of an item
      const increaseQuantity = (index) => {
        const updatedCart = [...cart];
        updatedCart[index].quantity += 1;
        updatedCart[index].price =
          updatedCart[index].originalPrice *
          (1 - updatedCart[index].discount / 100) *
          updatedCart[index].quantity;
        setCart(updatedCart);
      };
    
      // Decrease quantity of an item
      const decreaseQuantity = (index) => {
        const updatedCart = [...cart];
        if (updatedCart[index].quantity > 1) {
          updatedCart[index].quantity -= 1;
          updatedCart[index].price =
            updatedCart[index].originalPrice *
            (1 - updatedCart[index].discount / 100) *
            updatedCart[index].quantity;
          setCart(updatedCart);
        }
      };
    
      // Remove an item from the cart
      const removeItem = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);
      };
    
      // Calculate total number of items in the cart
      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
      // Calculate total price of items in the cart
      const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    
      const toggleCartVisibility = () => {
        setIsCartVisible(!isCartVisible); // Toggle cart visibility
      };
    
      if (!product) {
        return <h2 className="text-center mt-10">No product saved.</h2>;
      }
  return (
    <div>
          {/* Cart Modal */}
          {isCartVisible && (
            <div className="fixed inset-0 bg-opacity-50 flex justify-end p-4 z-50 ">
              <div className="bg-white w-full p-6  shadow-lg">
                <div className="bg-gray-200 text-sm py-2 px-4 flex gap-120 sticky top-0 z-1000">
                  <div className="flex">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBHzRDV8FUU56u77iucJVXcQyHUhLX5YY7g&s"
                      alt=""
                      className="w-[20px] h-[20px] rounded-[60px] mt-[1px]"
                    />
                    <span className="text-orange-500 font-bold ">Sell on Jumia</span>
                  </div>
                  <div className="flex">
                    <span className="text-[12px] pt-1">JUMIA PAY</span>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBHzRDV8FUU56u77iucJVXcQyHUhLX5YY7g&s"
                      alt=""
                      className="w-[15px] h-[15px] rounded-[60px] mt-[3px] "
                    />
                    <FaAmazonPay className="text-[23px] text-[#c3c3c4] mt-[3px]" />
                  </div>
                </div>
    
                <div className="bg-gray-100 px-4 py-2 flex items-center justify-between shadow-md">
                  <div className="flex items-center gap-4">
                    <FaBars className="text-2xl cursor-pointer" />
                    <Link to="/">
                        <h1 className="text-3xl cursor-pointer font-bold text-black flex items-center">
                          JUMIA<span className="text-orange-500 text-2xl">★</span>
                        </h1>
                    </Link>
                  </div>
                  <div className="flex-1 mx-4 flex items-center border border-gray-300 rounded-md overflow-hidden">
                    <input
                      type="text"
                      placeholder="Search products, brands and categories"
                      className="flex-1 px-4 py-2 outline-none"
                    />
                    <button className="bg-orange-500 text-white px-4 py-2 flex items-center">
                      <FaSearch />
                    </button>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center cursor-pointer gap-1">
                      <FaUser className="text-xl" />
                      <span>Account</span>
                    </div>
                    <div className="flex items-center cursor-pointer gap-1">
                      <FaQuestionCircle className="text-xl" />
                      <span>Help</span>
                    </div>
                    <div className="flex items-center cursor-pointer relative">
                      <FaShoppingCart className="text-2xl" />
                      <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                        {totalItems}
                      </span>
                      <span className="ml-2">Cart</span>
                    </div>
                  </div>
                </div>
                <div className="flex mt-10">
                  <div className="w-[700px]">
                    {cart.length === 0 ? (
                      <p className="text-gray-600">Your cart is empty.</p>
                    ) : (
                      cart.map((item, index) => (
                        <div
                          key={index}
                          className="border p-4 mt-4 rounded-lg shadow-md flex items-center justify-between "
                        >
                          <div className=" items-center">
                            <div className="flex">
                              <img
                                src={item.images}
                                alt={item.title}
                                className="w-20 h-20 object-cover mr-4"
                              />
                              <div>
                                <h3 className="font-semibold">{item.title}</h3>
                                <p className="text-[#aaaaad]">in stock</p>
                                <div className="flex">
                                  <p className="text-black">Jumia</p>
                                  <IoPaperPlaneOutline className="text-[#ff6633] text-[15px] mt-2" />
                                  <p className="text-[#ff6633]">Express</p>
                                </div>
                              </div>
                            </div>
    
                            <button
                              onClick={() => removeItem(index)}
                              className="text-red-500 hover:text-red-700"
                            >
                              Remove
                            </button>
                          </div>
                          <div>
                            <div>
                              <div className="flex items-center ml-6">
                                <p className="text-green-500">₦{item.price}</p>
                                <p className="text-gray-500 line-through">
                                  ₦{item.originalPrice}
                                </p>
                              
                              </div>
    
                              <div className="flex items-center">
                                <button
                                  onClick={() => decreaseQuantity(index)}
                                  className="text-white hover:text-gray-700 border   w-8 h-8 flex items-center justify-center pb-4 bg-[#f68b1e] "
                                >
                                  -
                                </button>
                                <p className="mx-4">{item.quantity}</p>
                                <button
                                  onClick={() => increaseQuantity(index)}
                                  className="text-white hover:text-gray-700 border   w-8 h-7 flex items-center justify-center bg-[#f68b1e]"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                  <div className="ml-30">
                    <h3 className="text-lg font-bold mb-4">CART SUMMARY</h3>
                    <div className="flex justify-between mt-2">
                      <span>Item's total ({totalItems})</span>
                      <span>₦{totalPrice}</span>
                    </div>
                    <div className="flex justify-between mt-2">
                      <span>Buy 2 Items, Get N850 Off</span>
                      <span>-₦850</span>
                    </div>
                    <div className="flex justify-between mt-2">
                      <span>Subtotal</span>
                      <span>₦{totalPrice - 850}</span>
                    </div>
                    <button className="w-full bg-[#f68b1e] text-white py-2 rounded-lg mt-4">
                      Checkout (₦{totalPrice - 850})
                    </button>
                  </div>
                </div>
                <button
                  className="w-full bg-[#f68b1e] text-white py-2 rounded-lg mt-4"
                  onClick={toggleCartVisibility}
                >
                  Close
                </button>
              </div>
            </div>
          )}
    
          {/* Rest of your code remains unchanged */}
        </div>
  )
}

export default Cart