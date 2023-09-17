import data from "../../baiTapMovies/data.json";

const initialState = {
  rowSeats: data,
  bookedList: [],
  cssSeat: "",
};

const seatReducer = (state = initialState, action) => {
  switch (action.type) {
    case "bookedSeat": {
      const index = state.bookedList.findIndex(
        (item) => item.name === action.seat.name
      );

      if (index === -1) {
        const newList = [...state.bookedList, { ...action.seat }];

        return { ...state, bookedList: newList };
      }

      const newList = state.bookedList.filter((item) => {
        if (item.name !== action.seat.name) {
          return [...state.bookedList, { ...action.seat }];
        }
        return null;
      });

      return { ...state, bookedList: newList };
    }

    case "removeSeat": {
      const newList = state.bookedList.filter(
        (item) => item.name !== action.seatName
      );
      return { ...state, bookedList: newList };
    }
    default:
      return state;
  }
};

export default seatReducer;
