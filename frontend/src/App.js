import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/login";
import Register from "./components/Register/register";
import LoanApplication from "./components/Loan-Application/LoanApplication"
import AdminDashboard from "./components/Profile/AdminDashbord";
import Topbar from "./components/topbar/topbar";
import Dashboard from "./components/Dashboard-components/dashboard";
import UserDashboard from "./components/Profile/userdashbord";
import Profile from "./components/Profile/profile";
import Aboutus from "./components/about-us/aboutus";
import Contactus from "./components/Contact-us/contactus";
import Partner from "./components/Partner/partner";

function App() {
  return (
    <Router>
        <Topbar/>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/loan-application" element={<LoanApplication />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/user-dashboard" element={<UserDashboard/>} />
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/aboutus" element={<Aboutus/>}/>
        <Route path="/contactus" element={<Contactus/>}/>
        <Route path="/partner" element={<Partner/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
