"use client"; // Important for interactive components

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", Users: 40, Sales: 24 },
  { name: "Feb", Users: 30, Sales: 13 },
  { name: "Mar", Users: 20, Sales: 98 },
  { name: "Apr", Users: 27, Sales: 39 },
  { name: "May", Users: 18, Sales: 48 },
  { name: "Jun", Users: 23, Sales: 38 },
  { name: "Jul", Users: 34, Sales: 43 },
];

const page = () => {
  return (
    <div className=" min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Dashboard Overview</h1>

      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Users & Sales Overview</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Users" fill="#8884d8" />
            <Bar dataKey="Sales" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default page;
