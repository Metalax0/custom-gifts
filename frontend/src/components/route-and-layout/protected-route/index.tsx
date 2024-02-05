import { Outlet, Navigate } from "react-router-dom";
import { isLoggedIn } from "../../../functions/isLoggedIn";

const ProtectedRoute = () => {
    return isLoggedIn() ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
