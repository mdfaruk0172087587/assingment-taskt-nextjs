"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";

const DashboardLayout = ({ children }) => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: "Overview", href: "/user-dashboard/overview" },
        { name: "Add Products", href: "/user-dashboard/add-product" },
    ];

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-white">
            {/* Mobile Navbar */}
            <div className="md:hidden bg-blue-400 flex items-center justify-between p-4 shadow-md">
                <Link href='/'>
                <div className="flex justify-center items-center gap-2">
                    <img className="w-12 h-12 rounded-full" src="/my-store.webp" alt="" />
                    <span className="text-2xl font-bold text-blue-600">MyStore</span>
                </div>
                </Link>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white text-2xl"
                >
                    <HiMenu />
                </button>
            </div>

            {/* Sidebar */}
            <aside
                className={`
          bg-white p-6 rounded-r-2xl shadow-lg
          md:w-64 w-60 md:block ${isOpen ? "block" : "hidden"}
        `}
            >
                <h2 className="text-2xl font-bold mb-8 text-gray-800 hidden md:block">
                    MyStore
                </h2>
                <ul className="space-y-4">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className={`block p-3 rounded-lg font-medium transition-all text-center md:text-left ${isActive
                                            ? "bg-white text-white shadow-lg"
                                            : "hover:bg-white hover:text-white"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </aside>

            {/* Main content */}
            <main className="flex-1 p-6">
                <div className="flex flex-col">{children}</div>
            </main>
        </div>
    );
};

export default DashboardLayout;