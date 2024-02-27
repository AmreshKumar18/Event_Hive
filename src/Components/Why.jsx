import React from "react";
import { Link } from "react-router-dom";
import { IoIosGitNetwork } from "react-icons/io";
import { SlPeople } from "react-icons/sl";
import { CiMicrophoneOn } from "react-icons/ci";
import { IoFastFoodOutline } from "react-icons/io5";

import "../App.css";

const Why = () => {
  return (
    <>
      <div className="why">
        <div className="why-intro">
          <p className="why-small">Why Join Event Hive</p>
          <h1>Why You Here?</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <Link to="/about">Know More</Link>
        </div>
        <div className="why-icon">
          <div className="icons">
            <IoIosGitNetwork style={{ fontSize: 28, margin: 5 }} />
            <h3>Social Network</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam,
              voluptate.
            </p>
          </div>
          <div className="icons">
            <SlPeople style={{ fontSize: 28, margin: 5 }} />
            <h3>Meet New People</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam,
              voluptate.
            </p>
          </div>
          <div className="icons">
            <CiMicrophoneOn style={{ fontSize: 28, margin: 5 }} />
            <h3>New Speaker</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam,
              voluptate.
            </p>
          </div>
          <div className="icons">
            <IoFastFoodOutline style={{ fontSize: 28, margin: 5 }} />
            <h3>Refreshment</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam,
              voluptate.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Why;
