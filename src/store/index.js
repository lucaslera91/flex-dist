import { configureStore } from "@reduxjs/toolkit";
import telasSlice from "./telas-slice";

const store = configureStore({
  reducer: {
    telas: telasSlice.reducer,
  },
});

export default store;
