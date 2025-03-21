import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Nav from "./Nav";
import axios from "axios";

const Productpage = () => {
  const [category, setCategory] = useState([]);
  const adminId = JSON.parse(localStorage.getItem("admin"));
  const merchantId = adminId.id;

  const [formData, setFormData] = useState({
    title: "",
    descp: "",
    price: "",
    brand: "",
    quantity: "",
    images: "",
    currency: "NGN",
    min_qty: "",
    max_qty: "",
    discount: "",
    discount_expiration: "",
    has_refund_policy: false,
    has_discount: false,
    has_shipment: false,
    has_variation: false,
    shipping_locations: [],
    merchant_id: merchantId,
    category_id: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    descp: "",
    price: "",
    brand: "",
    quantity: "",
    images: "",
    currency: "",
    min_qty: "",
    max_qty: "",
    discount: "",
    discount_expiration: "",
    category_id: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear the error message when the user starts typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleBooleanChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value === "true" }));
  };

  const handleShippingLocationChange = (e) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      shipping_locations: [...prev.shipping_locations, value],
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Check each field for empty values
    if (!formData.title.trim()) {
      newErrors.title = "Please fill out this field.";
      isValid = false;
    }
    if (!formData.descp.trim()) {
      newErrors.descp = "Please fill out this field.";
      isValid = false;
    }
    if (!formData.price) {
      newErrors.price = "Please fill out this field.";
      isValid = false;
    }
    if (!formData.brand.trim()) {
      newErrors.brand = "Please fill out this field.";
      isValid = false;
    }
    if (!formData.quantity) {
      newErrors.quantity = "Please fill out this field.";
      isValid = false;
    }
    if (!formData.images.trim()) {
      newErrors.images = "Please fill out this field.";
      isValid = false;
    }
    if (!formData.currency.trim()) {
      newErrors.currency = "Please fill out this field.";
      isValid = false;
    }
    if (!formData.min_qty) {
      newErrors.min_qty = "Please fill out this field.";
      isValid = false;
    }
    if (!formData.max_qty) {
      newErrors.max_qty = "Please fill out this field.";
      isValid = false;
    }
    if (!formData.category_id) {
      newErrors.category_id = "Please select a category.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert("Please fill out all required fields.");
      return;
    }

    try {
      const res = await axios.post(
        "http://ecommerce.reworkstaging.name.ng/v2/products",
        formData
      );
      console.log(res);
      alert("Product added successfully!");
    } catch (error) {
      console.log(error);
      alert("Failed to add product. Please try again.");
    }
  };

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await axios.get(
          `http://ecommerce.reworkstaging.name.ng/v2/categories?merchant_id=${merchantId}`
        );
        setCategory(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategory();
  }, [merchantId]);

  return (
    <div>
      <div className="flex items-start">
        <Sidebar />
        <Nav />
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Add Product</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Category */}
            <div>
              <label className="block text-gray-700">Category</label>
              <select
                name="category_id"
                value={formData.category_id}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
              >
                <option value="">Select a category</option>
                {category.map((e) => (
                  <option key={e.id} value={e.id}>
                    {e.name}
                  </option>
                ))}
              </select>
              {errors.category_id && (
                <p className="text-red-500 text-sm mt-1">{errors.category_id}</p>
              )}
            </div>

            {/* Title */}
            <div>
              <label className="block text-gray-700">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
                placeholder="Men Shoe"
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">{errors.title}</p>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-700">Description</label>
              <textarea
                name="descp"
                value={formData.descp}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
                placeholder="Enter product description"
              ></textarea>
              {errors.descp && (
                <p className="text-red-500 text-sm mt-1">{errors.descp}</p>
              )}
            </div>

            {/* Price */}
            <div>
              <label className="block text-gray-700">Price (NGN)</label>
              <input
                name="price"
                value={formData.price}
                onChange={handleChange}
                type="number"
                className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
                placeholder="25930.67"
              />
              {errors.price && (
                <p className="text-red-500 text-sm mt-1">{errors.price}</p>
              )}
            </div>

            {/* Brand */}
            <div>
              <label className="block text-gray-700">Brand</label>
              <input
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                type="text"
                className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
                placeholder="Samsung"
              />
              {errors.brand && (
                <p className="text-red-500 text-sm mt-1">{errors.brand}</p>
              )}
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-gray-700">Quantity</label>
              <input
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                type="number"
                className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
                placeholder="100"
              />
              {errors.quantity && (
                <p className="text-red-500 text-sm mt-1">{errors.quantity}</p>
              )}
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-gray-700">Image URL</label>
              <input
                name="images"
                value={formData.images}
                onChange={handleChange}
                type="url"
                className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
                placeholder="https://example.com/image.jpg"
              />
              {errors.images && (
                <p className="text-red-500 text-sm mt-1">{errors.images}</p>
              )}
            </div>

            {/* Min & Max Quantity */}
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-gray-700">Min Quantity</label>
                <input
                  name="min_qty"
                  value={formData.min_qty}
                  onChange={handleChange}
                  type="number"
                  className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
                  placeholder="2"
                />
                {errors.min_qty && (
                  <p className="text-red-500 text-sm mt-1">{errors.min_qty}</p>
                )}
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700">Max Quantity</label>
                <input
                  name="max_qty"
                  value={formData.max_qty}
                  onChange={handleChange}
                  type="number"
                  className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
                  placeholder="5"
                />
                {errors.max_qty && (
                  <p className="text-red-500 text-sm mt-1">{errors.max_qty}</p>
                )}
              </div>
            </div>

            {/* Currency */}
            <div>
              <label className="block text-gray-700">Currency</label>
              <select
                name="currency"
                value={formData.currency}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
              >
                <option value="NGN">NGN</option>
              </select>
              {errors.currency && (
                <p className="text-red-500 text-sm mt-1">{errors.currency}</p>
              )}
            </div>

            {/* Discount */}
            <div>
              <label className="block text-gray-700">Discount (%)</label>
              <input
                name="discount"
                value={formData.discount}
                onChange={handleChange}
                type="number"
                className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
                placeholder="0"
              />
              {errors.discount && (
                <p className="text-red-500 text-sm mt-1">{errors.discount}</p>
              )}
            </div>

            {/* Shipping Locations */}
            <div>
              <label className="block text-gray-700">Shipping Locations</label>
              <select
                name="shipping_locations"
                onChange={handleShippingLocationChange}
                className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
              >
                <option value="">Select a location</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Ghana">Ghana</option>
                <option value="Egypt">Egypt</option>
              </select>
            </div>

            {/* Boolean Fields */}
            <div className="grid grid-cols-2 gap-4">
              {/* Has Refund Policy */}
              <div>
                <label className="block text-gray-700">Has Refund Policy</label>
                <select
                  name="has_refund_policy"
                  value={formData.has_refund_policy}
                  onChange={handleBooleanChange}
                  className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>

              {/* Has Discount */}
              <div>
                <label className="block text-gray-700">Has Discount</label>
                <select
                  name="has_discount"
                  value={formData.has_discount}
                  onChange={handleBooleanChange}
                  className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>

              {/* Has Shipment */}
              <div>
                <label className="block text-gray-700">Has Shipment</label>
                <select
                  name="has_shipment"
                  value={formData.has_shipment}
                  onChange={handleBooleanChange}
                  className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>

              {/* Has Variation */}
              <div>
                <label className="block text-gray-700">Has Variation</label>
                <select
                  name="has_variation"
                  value={formData.has_variation}
                  onChange={handleBooleanChange}
                  className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Productpage;