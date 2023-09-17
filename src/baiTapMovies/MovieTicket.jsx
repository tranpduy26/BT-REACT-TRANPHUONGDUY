import React from "react";
import SeatList from "./SeatList";
import Tickets from "./Tickets";
import "./style.css";

const MovieTicket = () => {
  return (
    <div>
      <div className="background">
        <div className="overlay"></div>
      </div>

      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-md-8">
            <SeatList />
          </div>
          <div className="col-md-4">
            <Tickets />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieTicket;
