import {
    createSlice,
    CreateSliceOptions,
    PayloadAction,
} from "@reduxjs/toolkit";
import { userSliceState } from "../../types/store/userSliceType";

const initialState: userSliceState = {
    id: "",
    name: "Guest",
    isLoggedIn: false,
};

const userOptions: CreateSliceOptions = {
    name: "user",
    initialState,
    reducers: {
        setUserName: (state: userSliceState, action: PayloadAction<string>) => {
            return { ...state, name: action.payload };
        },
    },
};

const useSlice = createSlice(userOptions);
export const { setSettings } = useSlice.actions;
export default useSlice.reducer;
