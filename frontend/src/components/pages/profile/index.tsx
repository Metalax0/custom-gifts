import { useSelector } from "react-redux";
import { RootState } from "../../../state-management/store";
import "./style.css";
import { LogoutBttn } from "../../molecules/logoutBttn";

export const Profile = () => {
    const userName = useSelector((state: RootState) => state.user.name);

    return (
        <div className="profile">
            <h1> Welcome </h1>
            <h1>
                <u>{userName}</u>
            </h1>
            <h4> Page under construction </h4>
            <LogoutBttn />
        </div>
    );
};
