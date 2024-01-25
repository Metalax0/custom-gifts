import { ButtonPropType } from "../../../types/buttonType";
import "./style.css";

export const Button = ({ text, handleButtonClick }: ButtonPropType) => {
    return (
        <button className="bttn" onClick={handleButtonClick}>
            {text}
        </button>
    );
};
