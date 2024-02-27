import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Shortevent = ({ eventlist }) => {
  return (
    <div>
      <div className="smalleventheader">
        <h1>Upcoming Shows</h1>
        <Link to="/event">All Events</Link>
      </div>
      <div className="smalleventcard ">
        {eventlist.map((eventItem, eventIndex) => {
          return (
            <>
              <div class="card" style={{ width: 250 }}>
                <img
                  class="card-img-top"
                  src={eventItem.url}
                  alt="Card image cap"
                />

                <div class="card-body">
                  <h5 class="card-title">{eventItem.name}</h5>
                  <p class="card-text" style={{ fontSize: 12 }}>
                    {eventItem.date}
                  </p>
                  <p class="card-text" style={{ fontSize: 12 }}>
                    Organized by: {eventItem.dl}
                  </p>
                  <p class="card-text" style={{ fontSize: 12 }}>
                    Venue: {eventItem.venue}
                  </p>
                  <Link to="/event-details" className="btn btn-primary w-100">
                    More Info
                  </Link>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Shortevent;
