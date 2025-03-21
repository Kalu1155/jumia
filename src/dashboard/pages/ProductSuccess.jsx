import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Nav from "./Nav";

const ProductSuccess = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null); // State to track the product being edited
  const [isEditing, setIsEditing] = useState(false); // State to toggle edit modal

  const id = JSON.parse(localStorage.getItem("admin"));
  const merchantId = id?.id;

  // Fetch products
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://ecommerce.reworkstaging.name.ng/v2/products?merchant_id=${merchantId}`
        );
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      }
    };

    if (merchantId) {
      fetchData();
    }
  }, [merchantId]);

  // Handle delete
  const handleDelete = async (productId) => {
    try {
      await axios.delete(
        `http://ecommerce.reworkstaging.name.ng/v2/products/${productId}`
      );
      setData(data.filter((product) => product.id !== productId));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // Handle edit
  const handleEdit = (product) => {
    setEditingProduct(product); // Set the product to be edited
    setIsEditing(true); // Open the edit modal
  };

  // Handle update
  const handleUpdate = async (updatedProduct) => {
    try {
      const response = await axios.put(
        `http://ecommerce.reworkstaging.name.ng/v2/products/${updatedProduct.id}`,
        updatedProduct
      );
      console.log("Product updated:", response.data);

      // Update the product in the local state
      setData((prevData) =>
        prevData.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product
        )
      );

      // Close the edit modal
      setIsEditing(false);
      setEditingProduct(null);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="flex">
      <div className="flex items-start">
        <Sidebar />
        <Nav />
      </div>
      <div className="ml-60 mt-19">
        <h2 className="text-2xl font-bold mb-4">Product List</h2>
        {error && <p className="text-red-500">Failed to load products.</p>}
        <div className="grid grid-cols-4 gap-4">
          {data.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-lg font-bold mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-4">{product.brand}</p>
              <p className="text-lg font-bold">${product.price}</p>
              <div className="flex space-x-2">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleEdit(product)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Edit Modal */}
        {isEditing && (
          <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 mt-10">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
              <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleUpdate(editingProduct);
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-gray-700">Title</label>
                  <input
                    type="text"
                    value={editingProduct.title}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        title: e.target.value,
                      })
                    }
                    className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Brand</label>
                  <input
                    type="text"
                    value={editingProduct.brand}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        brand: e.target.value,
                      })
                    }
                    className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Price</label>
                  <input
                    type="number"
                    value={editingProduct.price}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        price: e.target.value,
                      })
                    }
                    className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Image URL</label>
                  <input
                    type="url"
                    value={editingProduct.image}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        image: e.target.value,
                      })
                    }
                    className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
                  />
                </div>
                <div className="flex space-x-2">
                  <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSuccess;