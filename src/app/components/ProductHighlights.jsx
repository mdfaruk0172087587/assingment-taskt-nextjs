"use client";
import { motion } from "framer-motion";
import { ShoppingBag, Star, Truck, Shield, Gift, Heart, Tag, Globe } from "lucide-react";

export default function ProductHighlights() {
  const highlights = [
    {
      id: 1,
      title: "Top Quality Products",
      description: "Carefully selected top-quality products for you.",
      icon: <Star className="w-10 h-10 text-yellow-400" />,
    },
    {
      id: 2,
      title: "Fast Delivery",
      description: "Quick and safe delivery at your doorstep.",
      icon: <Truck className="w-10 h-10 text-green-400" />,
    },
    {
      id: 3,
      title: "Affordable Prices",
      description: "Unbeatable deals and discounts every day.",
      icon: <ShoppingBag className="w-10 h-10 text-blue-400" />,
    },
    {
      id: 4,
      title: "Secure Payments",
      description: "All transactions are 100% secure and protected.",
      icon: <Shield className="w-10 h-10 text-red-400" />,
    },
    {
      id: 5,
      title: "Gift Options",
      description: "Perfect gift options for your loved ones.",
      icon: <Gift className="w-10 h-10 text-pink-400" />,
    },
    {
      id: 6,
      title: "Customer Support",
      description: "We provide 24/7 friendly customer support.",
      icon: <Heart className="w-10 h-10 text-red-500" />,
    },
    {
      id: 7,
      title: "Special Offers",
      description: "Exclusive offers available for loyal customers.",
      icon: <Tag className="w-10 h-10 text-indigo-400" />,
    },
    {
      id: 8,
      title: "Global Shipping",
      description: "We ship worldwide to reach every customer.",
      icon: <Globe className="w-10 h-10 text-teal-400" />,
    },
  ];

  return (
    <section className="pt-6">
      <div className="max-w-10/12 mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold text-gray-800 mb-4"
        >
          Why Choose <span className="text-indigo-600">Our Shop?</span>
        </motion.h2>
        
        {/* Short description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-600 text-lg mb-5 max-w-2xl mx-auto"
        >
          Discover the reasons why thousands of customers trust our products and services.
        </motion.p>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white shadow-md p-8 flex flex-col items-center text-center  hover:shadow-xl rounded-lg transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
