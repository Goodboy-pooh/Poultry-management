import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import  PoultryIllustration  from "../assets/poultry-illustration.svg";

const Dashboard = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-5">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <ul className="space-y-3">
          <li className="p-2 rounded-lg hover:bg-gray-200 cursor-pointer" onClick={() => navigate("/")}>
            Home
          </li>
          <li className="p-2 rounded-lg hover:bg-gray-200 cursor-pointer" onClick={() => navigate("poultry")}>
            Poultry
          </li>
          <li className="p-2 rounded-lg hover:bg-gray-200 cursor-pointer" onClick={() => navigate("reports")}>
            Reports
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Welcome to Your Dashboard</h1>
        <img src={PoultryIllustration} alt="Poultry Illustration" className="w-165 h-64 mb-6" />
        <Outlet /> {/* Child routes render here */}
      </main>
    </div>
  );
};

export default Dashboard;
