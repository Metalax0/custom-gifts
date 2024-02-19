import { Outlet, Navigate } from "react-router-dom";
import { getCookie } from "typescript-cookie";

const ProtectedRoute = () => {
    let isLoggedIn = false;
    const cookieUserInfo = getCookie("userInfo");
    if (cookieUserInfo) isLoggedIn = true;
    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
