import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "../protected-route";
import { TestComponenet } from "../../pages/test";
import { Register } from "../../pages/register";
import { Login } from "../../pages/login";
import { Landing } from "../../pages/landing";
import { Error } from "../../pages/error";
import { Layout } from "../layout";
import { useEffect } from "react";
import { getCookie } from "typescript-cookie";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../../../state-management/slices/userSlice";
import { Profile } from "../../pages/profile";
import { changeTheme } from "../../../utils/themeToggle";
import { SellerRegister } from "../../pages/seller-register";
import ProtectedSellerRoute from "../protected-seller-route";

export const AppRoutes = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        // Setting previously saved user info (id and name)
        const cookieUserInfo = getCookie("userInfo");
        if (cookieUserInfo)
            dispatch(setUserDetails(JSON.parse(cookieUserInfo)) as any);

        // Setting saved theme
        const currentTheme = localStorage.getItem("theme");
        if (currentTheme === "dark") {
            changeTheme(currentTheme, dispatch);
        } else {
            changeTheme("light", dispatch);
        }
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    {/* Requires any (customer, seller) login for access */}
                    <Route element={<ProtectedRoute />}>
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/test" element={<TestComponenet />} />
                    </Route>
                    {/* Requires seller login for access */}
                    <Route element={<ProtectedSellerRoute />}>
                        <Route
                            path="/seller-register"
                            element={<SellerRegister />}
                        />
                    </Route>
                    {/* Does not require login for access */}
                    <Route index element={<Landing />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
