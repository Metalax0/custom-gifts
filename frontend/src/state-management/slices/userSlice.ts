import {
    createSlice,
    CreateSliceOptions,
    PayloadAction,
} from "@reduxjs/toolkit";
import { userSliceState } from "../../types/store/userSliceType";

const initialState: userSliceState = {
    id: "",
    name: "",
    user_type: "",
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
                user_type: string;
            }>
        ) => {
            const { id, name, user_type } = action.payload;
            return {
                ...state,
                id,
                name,
                user_type,
            };
        },

        resetUserDetails: () => {
            return {
                id: "",
                name: "",
                user_type: "",
            };
        },
    },
};

const useSlice = createSlice(userOptions);
export const { setUserDetails, resetUserDetails } = useSlice.actions;
export default useSlice.reducer;
