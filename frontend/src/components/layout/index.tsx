import "./style.css";
import { Outlet } from "react-router-dom";
import { Navbar } from "../molecules/navbar";
import { Footer } from "../molecules/footer";

export const Layout = () => {
    return (
        <div className="layout">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};
