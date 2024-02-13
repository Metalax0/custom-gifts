import { ButtonPropType } from "../../../types/buttonType";
import "./style.css";

export const Button = ({ text, handleButtonClick, type }: ButtonPropType) => {
    return (
        <button className={`bttn bttn-${type}`} onClick={handleButtonClick}>
            {text}
        </button>
    );
};
