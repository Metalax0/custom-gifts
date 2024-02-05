import {
    createSlice,
    CreateSliceOptions,
    PayloadAction,
} from "@reduxjs/toolkit";
import { UISliceState } from "../../types/store/uiSliceType";

const initialState: UISliceState = {
    theme: "light",
};

const uiOptions: CreateSliceOptions = {
    name: "ui",
    initialState,
    reducers: {
        setTheme: (state: UISliceState, action: PayloadAction<string>) => {
            return { ...state, theme: action.payload };
        },
    },
};

const uiSlice = createSlice(uiOptions);
export const { setTheme } = uiSlice.actions;
export default uiSlice.reducer;
