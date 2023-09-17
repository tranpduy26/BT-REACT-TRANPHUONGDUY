import React from "react";
import { useSelector, useDispatch } from "react-redux";
import cn from "classnames";

const SeatItem = ({ rowSeat }) => {
  const { bookedList } = useSelector((state) => state.seats);
  console.log(bookedList);

  const dispatch = useDispatch();

  const handleBooked = (seat) => {
    dispatch({ type: "bookedSeat", seat });
  };

  return (
    <>
      {rowSeat.seats.map((seat, idx) => {
        const indexSeat = bookedList.findIndex(
          (item) => item.name === seat.name
        );

        return (
          <button
            key={idx}
            disabled={seat.booked}
            className={cn(`seat ${indexSeat !== -1 ? "bg-success" : "white"}`, {
              "booking-seat": seat.booked,
            })}
            onClick={() => handleBooked(seat)}
          >
            {seat.name}
          </button>
        );
      })}
    </>
  );
};

export default SeatItem;
