"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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
      alert("✅ Product added successfully!");
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
      alert("❌ Error: " + data.message);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white rounded-2xl shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Add a New Product</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Product Name" className="border px-4 py-2 rounded" />
        <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" className="border px-4 py-2 rounded" />
        <input name="brand" value={formData.brand} onChange={handleChange} placeholder="Brand" className="border px-4 py-2 rounded" />
        <input name="price" type="number" value={formData.price} onChange={handleChange} placeholder="Price" className="border px-4 py-2 rounded" />
        <input name="stock" type="number" value={formData.stock} onChange={handleChange} placeholder="Stock Quantity" className="border px-4 py-2 rounded" />
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="border px-4 py-2 rounded"></textarea>
        <input name="weight" value={formData.weight} onChange={handleChange} placeholder="Weight (e.g. 1.2kg)" className="border px-4 py-2 rounded" />
        <input name="returnPolicy" value={formData.returnPolicy} onChange={handleChange} placeholder="Return Policy" className="border px-4 py-2 rounded" />
        <input name="images" value={formData.images} onChange={handleChange} placeholder="Image URL (comma separated)" className="border px-4 py-2 rounded" />

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add Product
        </button>
      </form>
    </div>
  );
}
