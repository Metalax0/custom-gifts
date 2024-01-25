import { inputFieldPropsType } from "../../../types/inputFieldType";
import "./style.css";

export const InputField = ({
    type,
    placeholder,
    handleInputChange,
}: inputFieldPropsType) => {
    return (
        <input
            className="txt-input"
            type={type}
            id={type}
            name={type}
            onChange={handleInputChange}
            placeholder={placeholder}
        />
    );
};
