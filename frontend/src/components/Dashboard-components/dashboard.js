import React from "react";
import "./dashboard.css";
import {Link} from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard">
      
      <div className="section">
        <div className="moneynest-container">
          <span id="moneynest">
            Money<b>NEST</b>
          </span>
        </div>

        <h2>
          <span id="section-spantag1">
            A Secure Place for your Finance
          </span>
          <span id="section-spantag2">GET YOUR PERSONAL LOAN IN JUST 30 MINUTES 👈😊</span>
        </h2>
        
        <Link to={"/login"} className="sign-in-button">Sign in</Link>
      </div>
    </div>
  );
}

export default Dashboard;
