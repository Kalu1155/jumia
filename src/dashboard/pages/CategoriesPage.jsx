import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Nav from "./Nav";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CategoriesPage = () => {
  const [errors, setError] = useState(null);
  const [category, setCategory] = useState([]);
  const adminId = JSON.parse(localStorage.getItem("admin"));
  const merchantId = adminId.id;
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    merchant_id: merchantId,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    try {
      const fetchCategory = async () => {
        const res = await axios.get(
          `http://ecommerce.reworkstaging.name.ng/v2/categories?merchant_id=${merchantId}`
        );
        setCategory(res.data);
      };
      fetchCategory();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Check if fields are empty
      if (!formData.name.trim() || !formData.image.trim()) {
        return setError("Please fill in all fields");
      }

      // Send POST request
      const res = await axios.post(
        "http://ecommerce.reworkstaging.name.ng/v2/categories",
        formData
      );

      console.log(res);

      if (res.data && res.data && res.data.id) {
        toast.success("Category created successfully");
        const res = await axios.get(
          `http://ecommerce.reworkstaging.name.ng/v2/categories?merchant_id=${merchantId}`
        );
        setCategory(res.data);
      } else {
        toast.error("Failed to create category. Please check your input.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  const handleDelete = async (id) => {
    try {
      const confirm = window.confirm(
        "Are you sure you want to delete this category"
      );
      if (confirm) {
        const res = await axios.delete(
          `http://ecommerce.reworkstaging.name.ng/v2/categories/${id}`
        );
        console.log(res)
        if (res.data && res.data && res.data.id) {

          toast.info("Category deleted Successfuly");
        } else {
          toast.error("failed to deleted category");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Nav />
        <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6 mt-[70px]">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Add Category
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Category Name */}
              <div>
                <label className="block text-gray-700">Category Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
                  placeholder="Enter Category Name"
                />
              </div>

              {/* Image URL */}
              <div>
                <label className="block text-gray-700">Image URL</label>
                <input
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
                  placeholder="Enter Image URL"
                />
                {errors && <p className="text-red-500 text-sm">{errors}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
              >
                Add Category
              </button>
            </form>
          </div>
          <div className="grid mt-[40px] grid-cols-3 gap-7 ml-[230px]">
            {category?.map((category, index) => (
              <div
                key={index}
                className="bg-white w-[240px] shadow-lg rounded-lg overflow-hidden p-4 flex flex-col items-center"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-24 h-24 object-cover rounded-full mb-2"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {category.name}
                </h3>
                <button
                  className="w-full px-4 py-2 rounded-xl bg-black text-white font-bold"
                  onClick={() => handleDelete(category.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CategoriesPage;
