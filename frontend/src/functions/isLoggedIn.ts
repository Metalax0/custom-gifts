import { getCookie } from "typescript-cookie";

export const isLoggedIn = () => {
    return getCookie("userInfo") ? true : false;
};
