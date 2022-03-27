import { configureStore } from "@reduxjs/toolkit";

import appReducer from "./App.state";

const store = configureStore({
  reducer: appReducer,
});

export default store;
