import { configureStore } from "@reduxjs/toolkit";
import user from "../modules/userSlice";
import board from "../modules/boardSlice";

const store = configureStore({
  reducer: {
    user,
    board,
  },
});

export default store;
