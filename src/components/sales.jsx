import React, { useState } from "react";

const SalesExpenses = () => {
  const [formData, setFormData] = useState({
    saleDate: "",
    quantitySold: "",
    revenue: "",
    feedCost: "",
    medicineCost: "",
    operationalExpenses: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sales & Expenses Data Submitted:", formData);
    // You can add API calls or data processing here
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Sales & Expenses</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700">Date of Sale:</label>
          <input 
            type="date" 
            name="saleDate" 
            value={formData.saleDate} 
            onChange={handleChange} 
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Quantity Sold:</label>
          <input 
            type="number" 
            name="quantitySold" 
            value={formData.quantitySold} 
            onChange={handleChange} 
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Revenue (Ksh):</label>
          <input 
            type="number" 
            name="revenue" 
            value={formData.revenue} 
            onChange={handleChange} 
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Feed Cost (Ksh):</label>
          <input 
            type="number" 
            name="feedCost" 
            value={formData.feedCost} 
            onChange={handleChange} 
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Medicine Cost (Ksh):</label>
          <input 
            type="number" 
            name="medicineCost" 
            value={formData.medicineCost} 
            onChange={handleChange} 
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Operational Expenses (Ksh):</label>
          <input 
            type="number" 
            name="operationalExpenses" 
            value={formData.operationalExpenses} 
            onChange={handleChange} 
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default SalesExpenses;
