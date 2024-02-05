import {
    createSlice,
    CreateSliceOptions,
    PayloadAction,
} from "@reduxjs/toolkit";
import { userSliceState } from "../../types/store/userSliceType";

const initialState: userSliceState = {
    id: "",
    name: "",
};

const userOptions: CreateSliceOptions = {
    name: "user",
    initialState,
    reducers: {
        setUserDetails: (
            state: userSliceState,
            action: PayloadAction<{
                id: string;
                name: string;
            }>
        ) => {
            const { id, name } = action.payload;
            return {
                ...state,
                id,
                name,
            };
        },

        resetUserDetails: () => {
            return {
                id: "",
                name: "",
            };
        },
    },
};

const useSlice = createSlice(userOptions);
export const { setUserDetails, resetUserDetails } = useSlice.actions;
export default useSlice.reducer;
