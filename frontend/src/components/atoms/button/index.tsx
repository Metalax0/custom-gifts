import { ButtonPropType } from "../../../types/buttonType";
import "./style.css";

export const Button = ({
    text,
    handleButtonClick,
    type,
    disabled,
}: ButtonPropType) => {
    return (
        <button
            className={`bttn bttn-${type} `}
            onClick={handleButtonClick}
            disabled={disabled}
        >
            {text}
        </button>
    );
};
