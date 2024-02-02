import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./carSlice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
  },
});

export default store;
