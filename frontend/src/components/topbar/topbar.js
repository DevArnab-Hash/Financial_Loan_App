import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";

function topbar() {
  return (
    <div>
      <header className="top-bar">
        <Link className="top-box" id="home-btn" to={"dashboard"}>
          Home
        </Link>

        <Link to={"/profile"} className="top-box" id="profile-btn" >
          Profile
        </Link>
     
          <Link className="top-box" id="about-us-btn" to={"/aboutus"}>
            About-Us
          </Link>

          <Link className="top-box" id="contact-us-btn" to={"/contactus"}>
            Contact-Us
          </Link>
    
          <Link className="top-box" id="partners-btn" to={"/partner"}>
            Partners
          </Link>
        

        <Link className="top-box" id="loan-type-btn" to={"/loan-application"}>
          Apply-Loan
        </Link>
      </header>
    </div>
  );
}
export default topbar;
