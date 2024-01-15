import "./style.css";
import { Outlet } from "react-router-dom";
import { Navbar } from "../navbar";
import { Footer } from "../footer";

export const Layout = () => {
    return (
        <div className="layout">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};
