import { configureStore } from "@reduxjs/toolkit";
import seatReducer from "./redux/reducers/movieReducers";

const store = configureStore({
  reducer: {
    seats: seatReducer,
  },
});

export default store;
