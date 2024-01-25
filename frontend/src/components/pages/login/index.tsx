import "./style.css";
import { useState } from "react";
import { FormInputGroup } from "../../molecules/formInputGroup/intex";
import { LoginFormType } from "../../../types/loginFormType";
import { FormCheckboxGroup } from "../../molecules/formCheckboxGroup";
import { NavLink } from "react-router-dom";
import { Button } from "../../atoms/button";

export const Login = () => {
    const [loginForm, setloginForm] = useState<LoginFormType>({
        email: "",
        password: "",
        rememberMe: false,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setloginForm({ ...loginForm, [e.target.name]: e.target.value });
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setloginForm({ ...loginForm, [e.target.name]: e.target.checked });
    };

    const handleButtonClick = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        console.log("Login Bttn Clicked");
    };

    return (
        <div className="login">
            <form className="login-form">
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
            </form>
        </div>
    );
};
