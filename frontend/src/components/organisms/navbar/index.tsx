import "./style.css";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

export const Navbar = () => {
    return (
        <div className="navbar">
            <img
                className="navbar-logo"
                src="images/clover.gifts.png"
                alt="store logo"
            />
            <DesktopNav />
            <MobileNav />
        </div>
    );
};
