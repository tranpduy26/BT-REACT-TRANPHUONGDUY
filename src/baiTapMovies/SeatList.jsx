import React from "react";
import { useSelector } from "react-redux";
import SeatItem from "./SeatItem";

const SeatList = () => {
  const { rowSeats } = useSelector((state) => state.seats);

  return (
    <div>
      <h1
        style={{ letterSpacing: "2px" }}
        className="text-center text-warning fs-2 fw-bolder"
      >
        BOOKING TICKETS "MARVEL - IRON MAN"
      </h1>
      <h5 className="text-center text-white fw-bolder">Màn Hình Chiếu</h5>
      <div className="d-flex justify-content-center">
        <div className="screen"></div>
      </div>

      <div className="seats">
        <div className="text-warning d-flex justify-content-around align-items-center fs-5 fw-bolder mx-5">
          <p
            style={{
              width: "5px",
              height: "5px",
              visibility: "hidden",
            }}
          >
            {rowSeats[0].row}
          </p>
          {rowSeats[0].seats.map((item, seatIndex) => {
            return (
              <p
                // style={{ margin: "0 0 0 40px" }}
                key={seatIndex}
                className="seat text-center fs-4 border-0"
              >
                {seatIndex + 1}
              </p>
            );
          })}
        </div>

        {rowSeats.map((rowSeat, index) => {
          return (
            <div key={index}>
              <div
                style={{ marginBottom: "15px" }}
                className="d-flex justify-content-around align-items-center text-warning fs-5 fw-bolder mx-5"
              >
                <p
                  style={{ width: "5px", height: "5px" }}
                  className="fw-bolder"
                >
                  {rowSeat.row}
                </p>

                <SeatItem rowSeat={rowSeat} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SeatList;
