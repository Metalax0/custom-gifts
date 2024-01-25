import { NavLink } from "react-router-dom";
import { ThemeToggleBttn } from "../../../molecules/themeToggleBttn";
import "./style.css";

export const DesktopNav = () => {
    return (
        <>
            <ul className="navbar-items">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "active" : "inactive"
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/services"
                        className={({ isActive }) =>
                            isActive ? "active" : "inactive"
                        }
                    >
                        Services
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/gallery"
                        className={({ isActive }) =>
                            isActive ? "active" : "inactive"
                        }
                    >
                        Gallery
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive ? "active" : "inactive"
                        }
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
            <div className="navbar-secondary-wrapper">
                <ThemeToggleBttn />
                <NavLink
                    to="/login"
                    className={({ isActive }) => (isActive ? "" : "inactive")}
                >
                    <img
                        className="navbar-account-icon"
                        src="images/user-icon.png"
                        alt="store logo"
                    />
                </NavLink>
            </div>
        </>
    );
};
