import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingpage";
import Dashboard from "./components/dashboard";
import Birds from "./components/birds";
import Sales from "./components/sales";
import Poultry from "./components/poultry";
import Reports from "./components/reports";
import "./App.css";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/birds" element={<Birds />} />
        <Route path="/sales" element={<Sales />} />

        {/* Parent route for nested routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="poultry" element={<Poultry />} />
          <Route path="reports" element={<Reports />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
