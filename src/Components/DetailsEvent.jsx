import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { GrAnnounce } from "react-icons/gr";
import { FaRegShareSquare } from "react-icons/fa";
import { CgCalendarDates } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";

const DetailsEvent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? (
        // <div className="cards">
        //   <SkeletonTheme color="#202020" highlightColor="#444">
        //     <p>
        //       <Skeleton count={1} />
        //     </p>
        //     <h1>
        //       <Skeleton count={1} />
        //     </h1>
        //     <Card>
        //       <Skeleton count={1} height={600} />
        //     </Card>
        //   </SkeletonTheme>
        // </div>

        <Card style={{ width: 800, margin: "auto", padding: "auto" }}>
          <SkeletonTheme color="#202020" highlightColor="#444">
            <p>
              <Skeleton count={1} />
            </p>
            <h1>
              <Skeleton count={1} />
            </h1>
            <Card>
              <Skeleton count={1} height={600} />
            </Card>
          </SkeletonTheme>
        </Card>
      ) : (
        <div className="details-event">
          <p>Fri, Jan 20</p>
          <h1 style={{ textAlign: "center" }}>Heading</h1>
          <Card style={{ width: 800 }} className="details-event-card">
            <Card.Img variant="top" src="../header.jpg" />
            <Card.Body>
              <div className="share">
                <Card.Text className="top-header">
                  <div className="annoucement2">
                    <GrAnnounce size="1.5em" />
                    <p>Ticket</p>
                  </div>
                  <div className="annoucement2">
                    <GrAnnounce size="1.5em" />
                    <p>Ticket sales end soon</p>
                  </div>
                  <FaRegShareSquare style={{ cursor: "pointer" }} size="2em" />
                </Card.Text>
              </div>
              <Card.Title style={{ fontSize: 32, fontWeight: 800 }}>
                Card Title
              </Card.Title>
              <Card.Text>
                <div className="description">
                  <h1 style={{ fontSize: 16, fontWeight: 300 }}>
                    Time & Location
                  </h1>
                  <div className="time">
                    <CgCalendarDates style={{ fontSize: 20, margin: 5 }} />
                    <p style={{ fontSize: 16, fontWeight: 300 }}>
                      Jan 19, 2024, 9:00 PM
                    </p>
                  </div>
                  <div className="location">
                    <CiLocationOn />
                    <p style={{ fontSize: 16, fontWeight: 300 }}>
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
                <div className="description">
                  <h1>About The Event</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur libero iure quas, unde eaque nulla aliquam
                    debitis commodi non velit.
                  </p>
                  <p>Duty Leave:</p>
                </div>
              </Card.Text>
              <Card.Text>
                <p style={{ textAlign: "left" }}>
                  Oraginized By: <span>DSW</span>
                </p>
              </Card.Text>

              {/* Registration part */}
              <div className="registration">
                <div className="field_1">
                  <input type="text" placeholder="First Name" required />
                  <input type="text" placeholder="Last Name" required />
                </div>
                <div className="field_2">
                  <input type="text" placeholder="Roll no..." />
                  <input
                    type="email"
                    name="email"
                    placeholder="email..."
                    required
                  />
                </div>
                <div className="checkbox">
                  <input type="checkbox" name="checkbox" />
                </div>
                <Button variant="primary">Register Now</Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      )}
    </>
  );
};

export default DetailsEvent;
