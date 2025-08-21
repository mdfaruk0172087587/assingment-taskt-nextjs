import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className=" flex flex-col justify-center items-center text-center px-4 my-6">
      {/* Headline */}
      <h1 className="text-6xl font-bold mb-6 text-gray-900 dark:text-white">
        Welcome to <span className="text-blue-500">MyShop</span>
      </h1>

      {/* Subtext */}
      <p className="text-lg mb-8 text-gray-700 dark:text-gray-300 max-w-xl">
        Discover amazing products, manage your own items, and enjoy a seamless shopping experience.
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        <Link
          href="/products"
          className="px-6 py-3 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition"
        >
          View Products
        </Link>
        <Link
          href="/login"
          className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Login
        </Link>
      </div>
    </section>
  );
};

export default Hero;
