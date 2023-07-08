import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    addPost: () => {},
  },
});

export const { addPost } = boardSlice.actions;
export default boardSlice.reducer;
