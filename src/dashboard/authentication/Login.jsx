import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.email.trim() || !formData.password.trim()) {
      toast.error("Please fill in all fields");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post(
        "http://ecommerce.reworkstaging.name.ng/v2/merchants/login",
        formData
      );
      
      console.log("API Response:", res.data);
      
      if (res.status === 200 && res.data.id) {
        toast.success("Login successful");
        localStorage.setItem("admin", JSON.stringify(res.data));
        navigate('/AdminDash')
      } else {
        toast.error(res.data.msg || "Invalid email or password");
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast.error(
        error.response?.data?.msg || "An error occurred. Please try again."
      );
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-xl shadow-md w-96">
        <h2 className="text-white text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
          </div>
          <Link to='/Adminsignin' className="flex justify-end hover:text-red-600 text-sm mb-2">!I don't have an account</Link>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Login;