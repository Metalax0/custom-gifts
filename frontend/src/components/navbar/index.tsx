import { NavLink } from "react-router-dom";
import "./style.css";

export const Navbar = () => {
    return (
        <div className="navbar">
            <img
                className="navbar-logo"
                src="images/clover.gifts.png"
                alt="store logo"
            />
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
    );
};
