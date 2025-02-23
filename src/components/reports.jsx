import React from "react";

const Reports = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Reports</h1>
      <div className="bg-white p-4 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Farm Performance Overview</h2>
        <p className="text-gray-600">View detailed reports on poultry stock, sales, and production.</p>
        
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="p-5 bg-gray-200 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Stock Report</h3>
            <p className="text-gray-600">Track current poultry stock levels.</p>
          </div>
          <div className="p-5 bg-gray-200 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Sales Report</h3>
            <p className="text-gray-600">Monitor revenue and transactions.</p>
          </div>
          <div className="p-5 bg-gray-200 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Production Report</h3>
            <p className="text-gray-600">Analyze egg production trends.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
