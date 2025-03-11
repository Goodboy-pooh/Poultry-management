import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";
import PrivateRoute from "./components/privateroute";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import Birds from "./components/Birds";
import Sales from "./components/Sales";
import Poultry from "./components/Poultry";
import Reports from "./components/reports";
import "./App.css";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/birds" element={<Birds />} />
        <Route path="/sales" element={<Sales />} />

        {/* Protect Dashboard and Nested Routes */}
        <Route
          path="/dashboard/*"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="poultry" element={<Poultry />} />
          <Route path="reports" element={<Reports />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
