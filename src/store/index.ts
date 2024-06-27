import { configureStore } from "@reduxjs/toolkit";
import questionReducer from "./questionSlice";
import personReducer from "./personSlice";

const store = configureStore({
  reducer: {
    question: questionReducer,
    person: personReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
