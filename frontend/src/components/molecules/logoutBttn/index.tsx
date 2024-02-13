import { useDispatch } from "react-redux";
import { logout } from "../../../utils/logout";
import { Button } from "../../atoms/button";
import "./style.css";
import { useNavigate } from "react-router-dom";

export const LogoutBttn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <Button
            text="Logout"
            type="primary"
            handleButtonClick={() => logout(dispatch, navigate)}
        />
    );
};
