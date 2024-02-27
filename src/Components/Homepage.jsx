import React, { useState } from "react";
// import Navbar from "./Navbar";
import Header from "./Header";
import Why from "./Why";
import Shortevent from "./Shortevent";
import Galllery from "./Galllery";
import ShortBlog from "./ShortBlog";
import Analytics from "./Analytics";
// import Footer from "./Footer";

const Homepage = () => {
  const [eventlist, setEventlist] = useState([
    {
      url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F675592769%2F1969729872263%2F1%2Foriginal.png?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C940%2C470&s=84a3bfd73a4b51f6536b913de6a6ccd7",
      name: "Hackathon",
      date: "January 18 · 11:30pm - January 19 · 1:30am GMT+5:30",
      venue: "Online Event",
    },
    {
      url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F655452529%2F1918263532203%2F1%2Foriginal.20231208-090037?w=940&auto=format%2Ccompress&q=75&sharp=10&s=649164016de728d90c611e1aac97fd25",
      name: "Creative Tech for Social Impact",
      date: "January 18 · 11:30pm - January 19 · 1:30am GMT+5:30",
      venue: "Online",
    },

    {
      url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F670778089%2F498953472539%2F1%2Foriginal.20240109-171355?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C27%2C2560%2C1280&s=dd41de1a4ec3ed94d8852b94d94fb62f",
      name: "AI for Good Hackathon",
      date: "Friday, February 16 · 1:30 - 4:30pm GMT+5:30",
      venue: "D1",
    },
  ]);

  return (
    <>
      {/* <Navbar></Navbar> */}
      <Header></Header>
      <Why></Why>
      <Analytics></Analytics>
      <Shortevent eventlist={eventlist}></Shortevent>
      <Galllery></Galllery>
      <ShortBlog></ShortBlog>
      {/* <Footer></Footer> */}
    </>
  );
};

export default Homepage;
