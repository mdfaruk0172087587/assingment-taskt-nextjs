"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  if (!pathname.includes('user-dashboard')){
    return (
    <footer className="bg-[#d1d5db] text-gray-700 mt-12">
      <div className="max-w-10/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold mb-4">MyShop</h3>
          <p className="text-sm">
            Your one-stop shop for amazing products. Discover, manage, and enjoy seamless shopping experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-blue-500">Home</Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-blue-500">Products</Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-blue-500">Login</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p className="text-sm">Email: mdfaruk01720875872@gmail.com</p>
          <p className="text-sm">Phone: +880 1720875872</p>
          <div className="flex gap-4 mt-3">
            <Link 
        href="https://www.facebook.com/faruk5872a" 
        target="_blank" 
        className="text-gray-500 hover:text-blue-600"
      >
        Facebook
      </Link>
      <Link 
        href="https://github.com/mdfaruk0172087587" 
        target="_blank" 
        className="text-gray-500 hover:text-gray-900"
      >
        GitHub
      </Link>
      <Link 
        href="https://www.linkedin.com/in/omar-faruk8/" 
        target="_blank" 
        className="text-gray-500 hover:text-blue-700"
      >
        LinkedIn
      </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-300 mt-8 py-4 text-center text-sm">
        © {new Date().getFullYear()} <span className="text-blue-500">MyShop</span>. All rights reserved.
      </div>
    </footer>
  );
  }
  else{
    return <></>
  }
  
};

export default Footer;
