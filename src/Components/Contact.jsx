import React from "react";
import "../App.css";

const Contact = () => {
  return (
    <>
      <div className="img-contact">
        <div className="header-contact">
          <h1>Contact Form</h1>
        </div>
      </div>
      <div className="contactform">
        <div className="contactus">
          <h1 style={{ fontSize: 30 }}>Send Your Message</h1>
          <p>Feel Free To Contact Us</p>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" required />
          <br />
          <input type="text" placeholder="Subject" />
          <br />
          <textarea
            placeholder="Type your message..."
            cols="20"
            rows="7"
          ></textarea>
          <br />
          <button className="sendbtn">Send Message</button>
        </div>
      </div>
    </>
  );
};

export default Contact;
