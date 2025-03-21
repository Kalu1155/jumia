import { FiShoppingCart } from "react-icons/fi";

const CartPage2 = ({ cart }) => {
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center border-b py-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-50 h-24 object-cover rounded-lg"
                />
                <div className="md:ml-6 mt-4 md:mt-0">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                  <p className="text-orange-500 font-bold">
                    ₦{(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
            <div className="mt-6">
              <h3 className="text-xl font-bold">
                Total: ₦{totalPrice.toLocaleString()}
              </h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage2;