import {
    createSlice,
    CreateSliceOptions,
    PayloadAction,
} from "@reduxjs/toolkit";
import { authSliceState } from "../../types/store/authSliceType";

const initialState: authSliceState = {
    token: null,
};

const authOptions: CreateSliceOptions = {
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (
            state: authSliceState,
            action: PayloadAction<string>
        ) => {
            return { token: action.payload };
        },

        resetCredentials: () => {
            return { token: null };
        },
    },
};

const authSlice = createSlice(authOptions);
export const { setCredentials, resetCredentials } = authSlice.actions;
export default authSlice.reducer;
