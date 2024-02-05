import { removeCookie } from "typescript-cookie";
import { resetUserDetails } from "../state-management/slices/userSlice";
import { resetCredentials } from "../state-management/slices/authSlice";

export const logout = (dispatch: any, navigate: any) => {
    removeCookie("token");
    removeCookie("userInfo");
    dispatch(resetUserDetails(null));
    dispatch(resetCredentials(null));
    navigate("/login");
};
