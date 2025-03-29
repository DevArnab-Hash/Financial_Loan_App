import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      res.data.role === "admin" ? navigate("/admin-dashboard") : navigate("/user-dashboard");
    } catch (err) {
      alert("Login Failed");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="login-container">
        <h2>LOGIN</h2>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" required /> 
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="input-field" required />
        <button type="submit" id="login-button">Login</button>
        <p>
          Don’t have an account? <Link to={"/register"} id="sign-up">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;


// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });
//             alert("Login Successful!");

//             // Save token & admin status
//             localStorage.setItem("token", response.data.token);
//             res.data.role === "admin" ? navigate("/admin") : navigate("/loan-status");

//             // Redirect to dashboard
//             if (response.data.isAdmin) {
//                 navigate("/admin");
//             } else {
//                 navigate("/loan-status");
//             }
//         } catch (error) {
//             alert("Login failed! Check credentials.");
//         }
//     };

//     return (
//         <div>
//             <h2>Login</h2>
//             <form onSubmit={handleLogin}>
//                 <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//                 <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// };

// export default Login;
