import { useSelector } from "react-redux";
import { RootState } from "../state-management/store";

export const useIsLoggedIn = () => {
    const userID = useSelector((state: RootState) => state.user.id);
    return userID ? true : false;
};
