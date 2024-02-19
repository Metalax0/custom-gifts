import "./style.css";
import { useContext, useEffect, useState } from "react";
import { FormInputGroup } from "../../molecules/formInputGroup";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../../atoms/button";
import { RegisterFormType } from "../../../types/registerFormType";
import { useAPI } from "../../../hooks/useAPI";
import { apiRoutes } from "../../../api/apiRoutes";
import { NotificationContext } from "../../../misc/notification-provider";
import { FormCheckboxGroup } from "../../molecules/formCheckboxGroup";

export const Register = () => {
    const [registerForm, setregisterForm] = useState<RegisterFormType>({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
        isRegisterSeller: false,
    });

    const registerAPI = useAPI();
    const navigate = useNavigate();
    const { openNotification } = useContext(NotificationContext);

    // Handles API success and failure cases
    useEffect(() => {
        if (registerAPI.data) {
            console.log(registerAPI.data);
            openNotification(
                "Register Successful",
                `Registered as ${registerForm.name}`,
                "success"
            );
        } else if (registerAPI.error)
            openNotification("Register Error", `${registerAPI.error}`, "error");
    }, [registerAPI.data, navigate, openNotification, registerAPI.error]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setregisterForm({ ...registerForm, [e.target.name]: e.target.value });
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setregisterForm({ ...registerForm, [e.target.name]: e.target.checked });
    };

    const handleButtonClick = () => {
        registerForm.isRegisterSeller
            ? registerAPI.API("POST", apiRoutes.registerSeller, registerForm)
            : registerAPI.API("POST", apiRoutes.registerCustomer, registerForm);
    };

    return (
        <div className="register">
            <div className="register-form">
                {registerAPI.isLoading ? (
                    <h1>Loading ...</h1>
                ) : (
                    <>
                        <h2>Register</h2>
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
                                type="primary"
                            />
                            <FormCheckboxGroup
                                layout="row"
                                type="isRegisterSeller"
                                handleCheckboxChange={handleCheckboxChange}
                            />
                            <p className="flex-row gap-10">
                                <label>Already have an account?</label>
                                <NavLink to="/login">Login</NavLink>
                            </p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
