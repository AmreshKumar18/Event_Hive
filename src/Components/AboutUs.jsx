import React from "react";
import "../App.css";

import { IoIosGitNetwork } from "react-icons/io";
import { SlPeople } from "react-icons/sl";
import { MdOutlineSchedule } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegShareSquare } from "react-icons/fa";

const AboutUs = () => {
  return (
    <>
      <div className="about_sec">
        <h1 className="about-sec-h1">About Us</h1>
        <div className="about-heading-1">
          <p style={{ textAlign: "center" }}>Welcome to Eventbrite</p>
          <h1 style={{ textAlign: "center" }}>
            All the tools and technology to sell tickets faster
          </h1>
          <p style={{ textAlign: "center", marginLeft: 60, marginRight: 60 }}>
            Eventbrite is a global event ticketing and marketing platform,
            powering millions of events in nearly 180 countries. We empower
            event organizers with industry-leading tools and technology to
            create, manage, and promote unforgettable live experiences around
            the world.
          </p>
          <br />
          <div className="about-heading-3">
            <p style={{ textAlign: "center", marginLeft: 60, marginRight: 60 }}>
              Working with the team at Spark has elevated a one-day event into a
              successful two-day summit. Their expertise shines through when it
              comes to program development, speaker fulfillment, tradeshow
              management, sponsorship, marketing, and overall customer service.
              Spark’s professionalism and leadership has transformed the
              planning and execution of our events into a seamless experience.
            </p>
          </div>
          <div className="about-heading-3">
            <p style={{ textAlign: "center", marginLeft: 60, marginRight: 60 }}>
              EventHive goal of event management is to ensure that the event
              runs smoothly and successfully, meeting the objectives and
              expectations of the organizers and participants. The primary goal
              of event management is to create memorable and impactful
              experiences for attendees while meeting the goals and expectations
              of the organizers.
            </p>
          </div>
          <div className="about-heading-3">
            <h1 style={{ marginLeft: 60, marginRight: 60 }}>
              Benefits of an Event Reporting Template{" "}
            </h1>
            <ul>
              <li>
                {" "}
                <p>Consistency across meeting and event planners </p>
              </li>
              <li>
                <p>Clear expectation of how to close out an event</p>
              </li>
              <li>
                <p>Standard language to explain successes</p>
              </li>
              <li>
                <p>
                  Cuts down on time spent creating a report from scratch after
                  each event
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="about-heading-2">
          <h1 style={{ textAlign: "center", paddingTop: 10 }}>Features</h1>
          <div className="why-icon">
            <div className="icons">
              <MdOutlineSchedule style={{ fontSize: 28, margin: 5 }} />
              <h3>On Time Program</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam,
                voluptate.
              </p>
            </div>
            <div className="icons">
              <SlPeople style={{ fontSize: 28, margin: 5 }} />
              <h3>Build Community</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam,
                voluptate.
              </p>
            </div>
            <div className="icons">
              <IoIosNotificationsOutline style={{ fontSize: 28, margin: 5 }} />
              <h3>Event Notifications</h3>
              <p>
                Keep your community engaged and your events top-of-mind with
                automated event reminders and updates when event-goers attend,
                “Follow” or “Like” your events.
              </p>
            </div>
            <div className="icons">
              <FaRegShareSquare style={{ fontSize: 28, margin: 5 }} />
              <h3>Share on social</h3>
              <p style={{ color: "white" }}>
                Easily share your events on Facebook or LinkedIn directly from
                your Eventbrite account and position yourself as the top online
                ticket seller in your industry with more impressions, clicks,
                and shares.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
