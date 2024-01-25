import { FormInputCheckboxPropsType } from "../../../types/formInputCheckboxType";
import "./style.css";

export const FormCheckboxGroup = ({
    layout,
    type,
    handleCheckboxChange,
}: FormInputCheckboxPropsType) => {
    return (
        <div className={`form-input-group-${layout}`}>
            <input
                type={"checkbox"}
                id={type}
                name={type}
                onChange={handleCheckboxChange}
            />
            <label htmlFor={type}>{type}</label>
        </div>
    );
};
