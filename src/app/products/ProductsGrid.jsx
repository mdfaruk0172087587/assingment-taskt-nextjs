"use client";

import React from "react";

export default function ProductsGrid({ products }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
      {products.map((product) => (
        <div
          key={product._id}
          className="flex flex-col justify-between h-full bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform p-6"
        >
          {/* Content */}
          <div>
            <h2 className="text-2xl font-bold mb-3 text-gray-800">
              {product.name}
            </h2>
            <p className="text-gray-600 mb-4 line-clamp-3">
              {product.description}
            </p>
            <p className="text-lg font-semibold text-blue-600">${product.price}</p>
          </div>

          {/* Button at bottom */}
          <button
            onClick={() => (window.location.href = `/products/${product._id}`)}
            className="mt-6 w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-medium py-2 rounded-xl transition-all"
          >
            View Details
          </button>
        </div>
      ))}
    </div>
  );
}
