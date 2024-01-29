import "./style.css";
import { useState } from "react";
import { FormInputGroup } from "../../molecules/formInputGroup";
import { NavLink } from "react-router-dom";
import { Button } from "../../atoms/button";
import { RegisterFormType } from "../../../types/registerFormType";

export const Register = () => {
    const [registerForm, setregisterForm] = useState<RegisterFormType>({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
        // rememberMe: false,
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
        callRegisterAPI();
    };

    //
    const callRegisterAPI = async () => {
        const URL = "http://localhost:8000/account/seller.register";
        let data = null;

        let fetchData = {
            method: "POST",
            body: JSON.stringify(registerForm),
            headers: new Headers({
                "Content-Type": "application/json; charset=UTF-8",
            }),
        };

        console.log(fetchData);

        try {
            const response = await fetch(URL, fetchData);
            data = await response.json();
        } catch (error) {
            console.log("ERROR AAYO HAI", error);
        }

        console.log(data);
    };

    return (
        <div className="register">
            {/* <form className="register-form"> */}
            <div className="register-form">
                <h1>Register</h1>
                <div className="form-fields">
                    <FormInputGroup
                        layout="col"
                        type="name"
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
                        type="confirm_password"
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
            </div>
        </div>
    );
};
