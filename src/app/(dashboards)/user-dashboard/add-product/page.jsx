"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FiPackage, FiTag, FiBox, FiDollarSign, FiDatabase, FiMonitor, FiRefreshCcw, FiImage, FiFileText } from "react-icons/fi";
import toast from "react-hot-toast";


export default function AddProductPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    brand: "",
    price: "",
    stock: "",
    description: "",
    weight: "",
    returnPolicy: "",
    images: "",
  });

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (!session) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        addedBy: {
          name: session.user.name,
          email: session.user.email,
          image: session.user.image,
        },
      }),
    });

    const data = await res.json();
    console.log(data);

    if (data.success) {
      toast.success("Product added successfully!");
      setFormData({
        name: "",
        category: "",
        brand: "",
        price: "",
        stock: "",
        description: "",
        weight: "",
        returnPolicy: "",
        images: "",
      });
    } else {
      toast.error("Error: " + data.message);
    }
  };

  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-6 text-center">Add a New Product</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Product Name */}
        <div className="flex flex-col">
          <label className="flex items-center gap-2 font-medium text-gray-700">
            <FiPackage /> Product Name
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Product Name"
            className="border px-4 py-2 rounded"
          />
        </div>

        {/* Category */}
        <div className="flex flex-col">
          <label className="flex items-center gap-2 font-medium text-gray-700">
            <FiTag /> Category
          </label>
          <input
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            className="border px-4 py-2 rounded"
          />
        </div>

        {/* Brand */}
        <div className="flex flex-col">
          <label className="flex items-center gap-2 font-medium text-gray-700">
            <FiBox /> Brand
          </label>
          <input
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            placeholder="Brand"
            className="border px-4 py-2 rounded"
          />
        </div>

        {/* Price */}
        <div className="flex flex-col">
          <label className="flex items-center gap-2 font-medium text-gray-700">
            <FiDollarSign /> Price
          </label>
          <input
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            className="border px-4 py-2 rounded"
          />
        </div>

        {/* Stock */}
        <div className="flex flex-col">
          <label className="flex items-center gap-2 font-medium text-gray-700">
            <FiDatabase /> Stock Quantity
          </label>
          <input
            name="stock"
            type="number"
            value={formData.stock}
            onChange={handleChange}
            placeholder="Stock Quantity"
            className="border px-4 py-2 rounded"
          />
        </div>

        {/* Weight */}
        <div className="flex flex-col">
          <label className="flex items-center gap-2 font-medium text-gray-700">
            <FiMonitor /> Weight
          </label>
          <input
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            placeholder="Weight (e.g. 1.2kg)"
            className="border px-4 py-2 rounded"
          />
        </div>

        {/* Return Policy */}
        <div className="flex flex-col">
          <label className="flex items-center gap-2 font-medium text-gray-700">
            <FiRefreshCcw /> Return Policy
          </label>
          <input
            name="returnPolicy"
            value={formData.returnPolicy}
            onChange={handleChange}
            placeholder="Return Policy"
            className="border px-4 py-2 rounded"
          />
        </div>

        {/* Images */}
        <div className="flex flex-col">
          <label className="flex items-center gap-2 font-medium text-gray-700">
            <FiImage /> Image URL
          </label>
          <input
            name="images"
            value={formData.images}
            onChange={handleChange}
            placeholder="Image URL (comma separated)"
            className="border px-4 py-2 rounded"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col col-span-1 md:col-span-2">
          <label className="flex items-center gap-2 font-medium text-gray-700">
            <FiFileText /> Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="border px-4 py-2 rounded"
          ></textarea>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 col-span-1 md:col-span-2"
        >
          Add Product
        </button>
      </form>
    </div>

  );
}
