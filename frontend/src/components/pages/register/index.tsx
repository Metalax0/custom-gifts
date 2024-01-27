import "./style.css";
import { useState } from "react";
import { FormInputGroup } from "../../molecules/formInputGroup";
import { NavLink } from "react-router-dom";
import { Button } from "../../atoms/button";
import { RegisterFormType } from "../../../types/registerFormType";

export const Register = () => {
    const [registerForm, setregisterForm] = useState<RegisterFormType>({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        rememberMe: false,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setregisterForm({ ...registerForm, [e.target.name]: e.target.value });
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setregisterForm({ ...registerForm, [e.target.name]: e.target.checked });
    };

    const handleButtonClick = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        console.log("Login Bttn Clicked");
    };

    return (
        <div className="register">
            <form className="register-form">
                <h1>Register</h1>
                <div className="form-fields">
                    <FormInputGroup
                        layout="col"
                        type="fullName"
                        placeholder="john wick"
                        handleInputChange={handleInputChange}
                    />
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
                    <FormInputGroup
                        layout="col"
                        type="confirmPassword"
                        placeholder="**********"
                        handleInputChange={handleInputChange}
                    />
                    <Button
                        text="Register"
                        handleButtonClick={handleButtonClick}
                        isSubmit
                    />
                    <p className="flex-row gap-10">
                        <label>Already have an account?</label>
                        <NavLink to="/login">Login</NavLink>
                    </p>
                </div>
            </form>
        </div>
    );
};
