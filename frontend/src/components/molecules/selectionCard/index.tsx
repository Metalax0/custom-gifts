import { SelectionCardPropsType } from "../../../types/selectionCardType";
import "./style.css";

export const SelectionCard = ({
    title,
    img,
    isActive,
    onClick,
}: SelectionCardPropsType) => {
    return (
        <div className={`selection-card ${isActive}`} onClick={onClick}>
            <h3 className="selection-card-title">{title}</h3>
            <img
                className="selection-card-img"
                src={img}
                alt="t-shirt product img"
            />
        </div>
    );
};
