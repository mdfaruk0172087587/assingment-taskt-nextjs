"use client";
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center text-center px-4 py-6 bg-gradient-to-b from-indigo-50 to-white">
      {/* Headline */}
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-900 dark:text-white leading-tight">
        Welcome to <span className="text-blue-500">MyShop</span>
      </h1>

      {/* Subtext */}
      <p className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300 max-w-2xl">
        Discover amazing products, manage your own items, and enjoy a seamless shopping experience.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/products"
          className="px-8 py-3 bg-blue-500 text-white rounded-lg font-medium shadow-md hover:bg-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          View Products
        </Link>
      </div>
    </section>
  );
};

export default Hero;
