import React from "react";
import "../App.css";
import { MdFacebook } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOpenOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-content">
        <div className="footer-1">
          <img src="../logo.png" style={{ width: 200 }} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam soluta
            corrupti, laboriosam minus consectetur vel voluptatum quod hic atque
            facilis ullam similique magni cumque possimus expedita pariatur
            totam natus? Provident.
          </p>
          <div className="social-logo">
            <a href="#">
              <MdFacebook style={{ fontSize: 30 }} />
            </a>
            <a href="#">
              <FaSquareInstagram style={{ fontSize: 28 }} />
            </a>
            <a href="#">
              <TiSocialYoutubeCircular style={{ fontSize: 33 }} />
            </a>
            <a href="#">
              <AiFillTwitterCircle style={{ fontSize: 30 }} />
            </a>
          </div>
        </div>
        <div className="footer-2">
          <h1>
            Useful Links <hr style={{ width: 70, color: "red", margin: 0 }} />
          </h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="footer-3">
          <h1>
            Contact Us <hr style={{ width: 70, color: "red", margin: 0 }} />
          </h1>
          <div className="footericons">
            <IoCallOutline style={{ fontSize: 23 }} />
            <p> +91 6203503768</p>
          </div>
          <div className="footericons">
            <IoMailOpenOutline style={{ fontSize: 23 }} />
            <p>akumarcpr021@gmail.com</p>
          </div>
          <div className="footericons">
            <CiLocationOn style={{ fontSize: 25 }} />
            <p>
              Chandigarh University,
              <br /> Mohali, Punjab
            </p>
          </div>
        </div>
      </div>
      <section>
        <footer>
          <div className="footer-sec">
            <p>
              &#9400;Copyright 2024 <a href="#">Event Hive</a> All Rights
              Reserved.
            </p>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
