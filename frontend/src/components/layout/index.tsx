import "./style.css";
import { Outlet } from "react-router-dom";
import { Navbar } from "../organisms/navbar";
import { Footer } from "../organisms/footer";

export const Layout = () => {
    return (
        <div className="layout">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};
