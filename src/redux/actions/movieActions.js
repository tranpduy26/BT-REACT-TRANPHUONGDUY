import { REMOVE_SEAT, SELECT_SEAT } from "../constants/movieContants";

export const selectSeat = (seat) => {
  return {
    type: SELECT_SEAT,
    payload: seat,
  };
};

export const removeSeat = (seatId) => {
  return {
    type: REMOVE_SEAT,
    payload: seatId,
  };
};
