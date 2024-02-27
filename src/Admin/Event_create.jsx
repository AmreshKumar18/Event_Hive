import React from "react";
import "../App.css";

const Event_create = () => {
  // const handleform = async (e) => {
  //   e.preventdefault();

  //   const response = await fetch("http://localhost:3000/api/admin", {
  //     method: 'POST',
  //     headers:{
  //       "Content-type": 'application/json'
  //     },
  //     body: JSON.stringify({ name:})
  //   })
  // }


  return (
    <>
      <div className="event_create_card">
        <div className="card_logo">
          <img src="../logo.png" style={{ width: 150 }} alt="" />
        </div>
        <div className="field_1_card">
          <input type="file" name="filename" />
        </div>
        <div className="field_2_card">
          <input type="text" placeholder="Title..." name="title" />
          <input type="text" placeholder="Organiser name..." name="organiser" />
        </div>
        <div className="field_3_card">
          <input type="text" placeholder="Venue" name="venue" />
          <input type="text" placeholder="Month, Date, Year" name="month" />
          <input
            type="text"
            placeholder="Time (1:00 Pm - 2:00 Pm)"
            name="time"
          />
        </div>
        <div className="field_4_card">
          <textarea
            name="about"
            cols="30"
            rows="10"
            placeholder="Description of the event..."
          ></textarea>
        </div>
        <input type="submit" className="create_event"  />
      </div>
    </>
  );
  };

export default Event_create;
