import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode"; // Corrected named import

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please log in first");
        navigate("/login");
        return;
      }

      try {
        // Decode JWT token to get user role
        const decoded = jwtDecode(token);
        setUser(decoded);

        // Fetch user details from the backend
        const userRes = await axios.get("http://localhost:5000/api/auth/user", {
          headers: { Authorization: token },
        });

        // Redirect based on role
        if (userRes.data.role === "admin") {
          navigate("/admin-dashboard");
        } else {
          navigate("/user-dashboard");
        }
      } catch (err) {
        console.error("Invalid token or session expired", err);
        alert("Session expired, please log in again");
        localStorage.removeItem("token");
        navigate("/login");
      }
    };

    checkUser();
  }, [navigate]);

  return <h2>Redirecting...</h2>;
};

export default Profile;
