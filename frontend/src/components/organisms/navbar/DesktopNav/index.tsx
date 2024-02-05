import { NavLink } from "react-router-dom";
import { ThemeToggleBttn } from "../../../molecules/themeToggleBttn";
import "./style.css";
import { useIsLoggedIn } from "../../../../hooks/useIsLoggedIn";

export const DesktopNav = () => {
    const isLoggedIn = useIsLoggedIn();

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
            </ul>
            <div className="navbar-secondary-wrapper">
                <ThemeToggleBttn />
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
            </div>
        </>
    );
};
