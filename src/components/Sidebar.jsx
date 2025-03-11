import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-5">
      <h2 className="text-2xl font-bold mb-6">Poultry Management</h2>
      <ul>
        <li className="mb-4">
          <Link to="/" className="block p-2 hover:bg-gray-700 rounded">Dashboard</Link>
        </li>
        <li className="mb-4">
          <Link to="/poultry" className="block p-2 hover:bg-gray-700 rounded">Poultry Management</Link>
        </li>
        <li className="mb-4">
          <Link to="/reports" className="block p-2 hover:bg-gray-700 rounded">Reports</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
