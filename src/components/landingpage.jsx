import React, { useState } from "react";
import { Link } from "react-router-dom";
import  InventoryIcon  from "../assets/inventory-icon.svg?react";
import  ProductionIcon  from "../assets/production-icon.svg?react";
import  ReportsIcon  from "../assets/reports-icon.svg?react";


const LandingPage = ({ onLogin }) => {
  return (
    <div className="h-screen flex flex-col">
      {/* Navbar */}
      <header className="w-full bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Poultry Farm Management</h1>
        <nav>
          <ul className="flex space-x-6">
             <li className="hover:text-blue-600 cursor-pointer"><Link to="/">Home</Link></li>
             <li className="hover:text-blue-600 cursor-pointer"><Link to="/birds">Manage Birds</Link></li>
             <li className="hover:text-blue-600 cursor-pointer"><Link to="/sales">Sales & Expenses</Link></li>
             <li className="hover:text-blue-600 cursor-pointer"><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center bg-gray-100 p-10">
        <h2 className="text-4xl font-bold mb-4">Efficient Poultry Management for Your Farm</h2>
        <p className="text-lg text-gray-600 max-w-2xl mb-6">
          Streamline your poultry farm operations with our advanced management system. Track inventory, monitor production, and optimize your processes effortlessly.
        </p>
        <Link to ="/dashboard">
     <button onClick={onLogin} className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition">
          Get Started
        </button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="p-10 bg-white">
        <h3 className="text-3xl font-bold text-center mb-6">Key Features</h3>
        <div className="grid grid-cols-3 gap-6">
          <div className="p-5 bg-gray-100 rounded-xl shadow-lg text-center">
            <InventoryIcon className="w-24 h-24 mx-auto mb-3" />
            <h4 className="text-lg font-semibold">Inventory Management</h4>
            <p className="text-gray-500">Keep track of your poultry stock with ease.</p>
          </div>
          <div className="p-5 bg-gray-100 rounded-xl shadow-lg text-center">
            <ProductionIcon className="w-24 h-24 mx-auto mb-3" />
            <h4 className="text-lg font-semibold">Production Tracking</h4>
            <p className="text-gray-500">Monitor egg production and optimize output.</p>
          </div>
          <div className="p-5 bg-gray-100 rounded-xl shadow-lg text-center">
            <ReportsIcon className="w-24 h-24 mx-auto mb-3" />
            <h4 className="text-lg font-semibold">Automated Reports</h4>
            <p className="text-gray-500">Generate insightful reports for better decision-making.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-white p-4 text-center">
        &copy; 2025 Poultry Farm Management. All rights reserved.
      </footer>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="h-screen flex">
      <aside className="w-64 bg-white shadow-md p-5">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <ul className="space-y-3">
          <li className="p-2 rounded-lg hover:bg-gray-200 cursor-pointer">Home</li>
          <li className="p-2 rounded-lg hover:bg-gray-200 cursor-pointer">Poultry</li>
          <li className="p-2 rounded-lg hover:bg-gray-200 cursor-pointer">Reports</li>
        </ul>
      </aside>
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Welcome to Your Dashboard</h1>
      </main>
    </div>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn ? <Dashboard /> : <LandingPage onLogin={() => setIsLoggedIn(true)} />;
};

export default App;