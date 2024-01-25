import { FormInputGroupPropsType } from "../../../types/formInputGroupType";
import { InputField } from "../../atoms/inputField";
import "./style.css";

export const FormInputGroup = ({
    layout,
    type,
    placeholder,
    handleInputChange,
}: FormInputGroupPropsType) => {
    return (
        <div className={`form-input-group-${layout}`}>
            <label htmlFor={type}>{type}</label>
            <InputField
                type={type}
                placeholder={placeholder}
                handleInputChange={handleInputChange}
            />
        </div>
    );
};
