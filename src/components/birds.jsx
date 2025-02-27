import React, { useState } from "react";

const PoultryManagement = () => {
  const [formData, setFormData] = useState({
    category: "",
    age: "",
    weight: "",
    healthStatus: "",
    vaccination: "",
    feedConsumption: "",
    eggProduction: "",
    mortality: "",
    date: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Poultry Data Submitted:", formData);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Poultry Management</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700">Bird Category:</label>
          <select name="category" value={formData.category} onChange={handleChange} className="w-full p-2 border rounded" required>
            <option value="">Select Category</option>
            <option value="Chicks">Chicks</option>
            <option value="Growers">Growers</option>
            <option value="Layers">Layers</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Age (days):</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} className="w-full p-2 border rounded" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Weight (kg):</label>
          <input type="number" name="weight" value={formData.weight} onChange={handleChange} className="w-full p-2 border rounded" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Health Status:</label>
          <input type="text" name="healthStatus" value={formData.healthStatus} onChange={handleChange} className="w-full p-2 border rounded" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Vaccination:</label>
          <input type="text" name="vaccination" value={formData.vaccination} onChange={handleChange} className="w-full p-2 border rounded" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Feed Consumption (kg/day):</label>
          <input type="number" name="feedConsumption" value={formData.feedConsumption} onChange={handleChange} className="w-full p-2 border rounded" required />
        </div>
        {formData.category === "Layers" && (
          <div className="mb-4">
            <label className="block text-gray-700">Egg Production (per day):</label>
            <input type="number" name="eggProduction" value={formData.eggProduction} onChange={handleChange} className="w-full p-2 border rounded" required />
          </div>
        )}
        <div className="mb-4">
          <label className="block text-gray-700">Mortality (number):</label>
          <input type="number" name="mortality" value={formData.mortality} onChange={handleChange} className="w-full p-2 border rounded" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Date:</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full p-2 border rounded" required />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default PoultryManagement;
