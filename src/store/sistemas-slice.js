import { createSlice } from "@reduxjs/toolkit";

const sistemaSlice = createSlice({
  name: "sistema",
  initialState: {test: 'true'},
  reducers: {
    productos(state) {
      state.test = 'Test 2'
    },
  },
});

export const sistemaActions = sistemaSlice.actions;

export default sistemaSlice;
