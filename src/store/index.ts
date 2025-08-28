import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import coursesReducer from "../features/coursesSlice";
import videoReducer from "../features/videoSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    courses: coursesReducer,
    video: videoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
