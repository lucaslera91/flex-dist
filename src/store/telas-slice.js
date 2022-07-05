import { createSlice } from "@reduxjs/toolkit";

const telasSlice = createSlice({
  name: "telas",
  initialState: {test: true},
  reducers: {
    productos(state) {
      state.test = !state.test
    },
  },
});

export const telasActions = telasSlice.actions;

export default telasSlice;
