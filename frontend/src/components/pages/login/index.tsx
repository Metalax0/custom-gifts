import "./style.css";
import { useContext, useEffect, useState } from "react";
import { FormInputGroup } from "../../molecules/formInputGroup";
import { LoginFormType } from "../../../types/loginFormType";
import { FormCheckboxGroup } from "../../molecules/formCheckboxGroup";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../../atoms/button";
import { apiRoutes } from "../../../api/apiRoutes";
import { useAPI } from "../../../hooks/useAPI";
import { setCookie } from "typescript-cookie";
import { NotificationContext } from "../../../misc/notification-provider";

export const Login = () => {
    const [loginForm, setloginForm] = useState<LoginFormType>({
        email: "",
        password: "",
    });
    const loginAPI = useAPI();
    const navigate = useNavigate();
    const { openNotification } = useContext(NotificationContext);

    // Handles API success and failure cases
    useEffect(() => {
        if (loginAPI.data) {
            console.log(loginAPI.data);
            openNotification(
                "Login Successful",
                `Welcome ${loginAPI.data.userInfo.name}`,
                "success"
            );
            setCookie("token", loginAPI.data.tokens.access);
            navigate("/");
        } else if (loginAPI.error)
            openNotification("Login Error", `${loginAPI.error}`, "error");
    }, [loginAPI.data, loginAPI.error, navigate, openNotification]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setloginForm({ ...loginForm, [e.target.name]: e.target.value });
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setloginForm({ ...loginForm, [e.target.name]: e.target.checked });
    };

    const handleButtonClick = async () => {
        loginAPI.API("POST", apiRoutes.login, loginForm);
    };

    return (
        <div className="login">
            <div className="login-form">
                {loginAPI.isLoading ? (
                    <h1>Loading ...</h1>
                ) : (
                    <>
                        <h1>Login</h1>
                        <div className="form-fields">
                            <FormInputGroup
                                layout="col"
                                type="email"
                                placeholder="john@gmail.com"
                                handleInputChange={handleInputChange}
                            />
                            <FormInputGroup
                                layout="col"
                                type="password"
                                placeholder="**********"
                                handleInputChange={handleInputChange}
                            />
                            <div className="flex-row  gap-40">
                                <FormCheckboxGroup
                                    layout="row"
                                    type="rememberMe"
                                    handleCheckboxChange={handleCheckboxChange}
                                />
                                <div className="flex-row">
                                    <NavLink to="/forgot-password">
                                        Forgot Password
                                    </NavLink>
                                </div>
                            </div>
                            <Button
                                text="Login"
                                handleButtonClick={handleButtonClick}
                                isSubmit
                            />
                            <p className="flex-row gap-10">
                                <label>Don't have an account?</label>
                                <NavLink to="/register">Register</NavLink>
                            </p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
