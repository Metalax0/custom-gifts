import { Navigate, Outlet } from "react-router-dom";
import { getCookie } from "typescript-cookie";

const ProtectedSellerRoute = () => {
    const userInfo = getCookie("userInfo");
    let cookieUserInfo = null;
    if (userInfo) cookieUserInfo = JSON.parse(userInfo);
    return cookieUserInfo && cookieUserInfo.user_type === "is_seller" ? (
        <Outlet />
    ) : (
        <Navigate to="/login" />
    );
};

export default ProtectedSellerRoute;
