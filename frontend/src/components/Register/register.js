import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", { name, email, password });
      alert("Registration Successful");
      navigate("/login");
    } catch (err) {
      alert("Registration Failed");
    }
  };

  return (
    <div >
      <form onSubmit={handleSubmit} className="register-container">
        <h2>Register</h2>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="input-field" required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="input-field" required />
        <button type="submit" id="register-button">Register</button>
      </form>
    </div>
  );
};

export default Register;
