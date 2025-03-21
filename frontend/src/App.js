import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import LoanApplication from "./components/LoanApplication";
import LoanStatus from "./components/LoanStatus";
import AdminDashboard from "./components/AdminDashbord";
// import UserDashboard from "./components/userdashbord";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/loan-application" element={<LoanApplication />} />
        <Route path="/loan-status" element={<LoanStatus />} />
        <Route path="/admin" element={<AdminDashboard />} />
        {/* <Route path="/user-dashboard" element={<UserDashboard/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
