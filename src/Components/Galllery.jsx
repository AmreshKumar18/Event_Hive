import React from "react";
import "../App.css";

const Galllery = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "black" }}>
        Latest Post & <span style={{ color: "wheat" }}>News</span>
      </h1>
      <div className="gallery">
        <img src="../header.jpg" alt="" style={{ width: 250, height: 300 }} />
        <img src="../header.jpg" alt="" style={{ width: 250, height: 300 }} />
        <img src="../header.jpg" alt="" style={{ width: 250, height: 300 }} />
        <img src="../header.jpg" alt="" style={{ width: 250, height: 300 }} />
        <img src="../header.jpg" alt="" style={{ width: 250, height: 300 }} />
        <img src="../header.jpg" alt="" style={{ width: 250, height: 300 }} />
        <img src="../header.jpg" alt="" style={{ width: 250, height: 300 }} />
        <img src="../header.jpg" alt="" style={{ width: 250, height: 300 }} />
      </div>
    </div>
  );
};

export default Galllery;
