import { Outlet, Navigate } from "react-router-dom";
import { useIsLoggedIn } from "../../../hooks/useIsLoggedIn";

const ProtectedRoute = () => {
    const isLoggedIn = useIsLoggedIn();
    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
