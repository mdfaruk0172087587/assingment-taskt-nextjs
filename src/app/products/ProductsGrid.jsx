"use client"; // important

import React from "react";

export default function ProductsGrid({ products }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product._id}
          className="border rounded-lg p-4 shadow hover:shadow-lg transition"
        >
          <img
            src={product.images}
            alt={product.name}
            className="w-full h-48 object-cover rounded-lg mb-3"
          />
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p className="text-gray-600 mb-2">${product.price}</p>
          <p className="text-sm text-gray-500">{product.description}</p>

          {/* Details Button */}
          <button
            onClick={() => (window.location.href = `/products/${product._id}`)}
            className="mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition"
          >
            Details
          </button>
        </div>
      ))}
    </div>
  );
}
