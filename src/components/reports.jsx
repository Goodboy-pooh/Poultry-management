import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import  {db}  from "../firebase"; // Ensure db is exported from firebase.js

const Reports = () => {
  const [poultryStock, setPoultryStock] = useState(0);
  const [totalSales, setTotalSales] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [totalEggProduction, setTotalEggProduction] = useState(0);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        // Fetch Poultry Stock
        const poultryCollection = collection(db, "poultry");
        const poultrySnapshot = await getDocs(poultryCollection);
        setPoultryStock(poultrySnapshot.size); // Total number of poultry records

        // Fetch Sales Data
        const salesCollection = collection(db, "sales");
        const salesSnapshot = await getDocs(salesCollection);
        let totalSalesCount = 0;
        let totalRevenueAmount = 0;

        salesSnapshot.forEach((doc) => {
          const data = doc.data();
          totalSalesCount += parseInt(data.quantitySold || 0);
          totalRevenueAmount += parseFloat(data.revenue || 0);
        });

        setTotalSales(totalSalesCount);
        setTotalRevenue(totalRevenueAmount);

        // Fetch Egg Production Data (only for Layers)
        let totalEggs = 0;
        poultrySnapshot.forEach((doc) => {
          const data = doc.data();
          if (data.category === "Layers") {
            totalEggs += parseInt(data.eggProduction || 0);
          }
        });

        setTotalEggProduction(totalEggs);
      } catch (error) {
        console.error("Error fetching reports:", error);
      }
    };

    fetchReports();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Reports</h1>
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Farm Performance Overview</h2>
        <p className="text-gray-600">View detailed reports on poultry stock, sales, and production.</p>

        <div className="grid grid-cols-3 gap-6 mt-6">
          <div className="p-5 bg-gray-200 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Stock Report</h3>
            <p className="text-gray-600">Current Poultry Stock: <span className="font-bold">{poultryStock}</span> birds</p>
          </div>
          <div className="p-5 bg-gray-200 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Sales Report</h3>
            <p className="text-gray-600">Total Sold: <span className="font-bold">{totalSales}</span> birds</p>
            <p className="text-gray-600">Total Revenue: <span className="font-bold">Ksh {totalRevenue.toLocaleString()}</span></p>
          </div>
          <div className="p-5 bg-gray-200 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Production Report</h3>
            <p className="text-gray-600">Total Eggs Produced: <span className="font-bold">{totalEggProduction}</span> eggs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;

