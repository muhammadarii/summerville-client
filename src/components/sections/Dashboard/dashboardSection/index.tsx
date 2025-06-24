"use client";

import React from "react";

const DashboardSection = () => {
  return (
    <div className="flex">
      {/* Main Content */}
      <main className="flex-1 p-6">
        <header className="flex items-center mb-8">
          <h1 className="text-3xl font-semibold ">Welcome to Dashboard</h1>
        </header>

        {/* Cards Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-black p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-medium mb-2 text-white">
              Total Services
            </h3>
            <p className="text-3xl font-bold text-[#9EFF00]">1,250</p>
          </div>
          <div className="bg-black p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-medium mb-2 text-white">Total Works</h3>
            <p className="text-3xl font-bold text-[#9EFF00]">$7,500</p>
          </div>
          <div className="bg-black p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-medium mb-2 text-white">
              Total Careers
            </h3>
            <p className="text-3xl font-bold text-[#9EFF00]">350</p>
          </div>
        </section>

        {/* Example Chart Placeholder */}
        <section className="bg-black p-6 rounded-xl shadow">
          <h3 className="text-xl font-medium mb-4 text-white">
            Recent Activity
          </h3>
          <p className="text-gray-500">
            Chart or recent activities can be displayed here.
          </p>
        </section>
      </main>
    </div>
  );
};

export default DashboardSection;
