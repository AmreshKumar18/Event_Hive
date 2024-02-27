import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header-section">
        <div className="header-content">
          <h1>Get An Unforgettable Event Experience</h1>
          <p>
            Priceless Memories With <span>Event Hive</span>
          </p>
          <Link to="/event">Check Event</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
