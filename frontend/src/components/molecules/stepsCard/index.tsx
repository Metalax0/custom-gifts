import { StepsCardPropsType } from "../../../types/StepsCardType";
import "./style.css";

export const StepsCard = ({ icon, title, listData }: StepsCardPropsType) => {
    return (
        <div className="steps-card">
            {icon}
            <h4>{title}</h4>
            <div className="steps-card-list">
                {listData.map((text: string, i) => (
                    <h5 key={i + text} className="steps-card-list-item">
                        {text}
                    </h5>
                ))}
            </div>
        </div>
    );
};
