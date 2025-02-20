import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Birds from "./components/birds";
import Sales from "./components/sales";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/birds">Manage Birds</Link></li>
            <li><Link to="/sales">Sales & Expenses</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/birds" element={<Birds />} />
          <Route path="/sales" element={<Sales />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
