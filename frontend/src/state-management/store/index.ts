import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice";
import uiSlice from "../slices/uiSlice";
import authSlice from "../slices/authSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        user: userSlice,
        ui: uiSlice,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
