import { NavLink } from "react-router-dom";
import "./style.css";
import { ThemeToggleBttn } from "../../../molecules/themeToggleBttn";
import { useIsLoggedIn } from "../../../../hooks/useIsLoggedIn";

export const MobileNav = () => {
    const isLoggedIn = useIsLoggedIn();

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
                        {isLoggedIn ? (
                            <NavLink
                                to="/profile"
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
                        ) : (
                            <NavLink to="/login" className="inactive">
                                Login
                            </NavLink>
                        )}
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
                            to="/store"
                            className={({ isActive }) =>
                                isActive ? "active" : "inactive"
                            }
                        >
                            Store
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
