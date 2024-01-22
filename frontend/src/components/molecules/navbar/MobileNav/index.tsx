import { NavLink } from "react-router-dom";
import "./style.css";
import { ThemeToggleBttn } from "../../../atoms/themeToggleBttn";

export const MobileNav = () => {
    return (
        <div className="mobile-nav">
            <button className="dropbtn">
                <svg viewBox="0 0 100 80" width="30" height="30">
                    <rect
                        width="100"
                        height="15"
                        rx="15"
                        fill="currentColor"
                    ></rect>
                    <rect
                        y="30"
                        width="100"
                        height="15"
                        rx="10"
                        fill="currentColor"
                    ></rect>
                    <rect
                        y="60"
                        width="100"
                        height="15"
                        rx="10"
                        fill="currentColor"
                    ></rect>
                </svg>
            </button>
            <div className="dropdown-content">
                <ul>
                    <li>
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                isActive ? "" : "inactive"
                            }
                        >
                            <img
                                className="navbar-account-icon"
                                src="images/user-icon.png"
                                alt="store logo"
                            />
                        </NavLink>
                    </li>
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

                    <li>
                        <ThemeToggleBttn />
                    </li>
                </ul>
            </div>
        </div>
    );
};
