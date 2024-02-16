import { StepsCard } from "../../../molecules/stepsCard";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faShirt,
    faPenFancy,
    faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

export const Workings = () => {
    const cardData = [
        {
            title: "Product Selection",
            icon: <FontAwesomeIcon icon={faShirt} size="xs" />,
            listData: ["Select a single product from the list"],
        },
        {
            title: "Design Formation",
            icon: <FontAwesomeIcon icon={faPenFancy} size="xs" />,
            listData: [
                "Choose predefined design",
                "Create your own Design",
                "Upload your design",
            ],
        },
        {
            title: "Item Checkout",
            icon: <FontAwesomeIcon icon={faCartShopping} size="xs" />,
            listData: ["Finalize your order and proceed to checkout"],
        },
    ];

    return (
        <div className="landing-workings landing-section">
            <h3>How does all this work ?</h3>
            <div className="landing-workings-card-container">
                {cardData.map((data: any) => (
                    <StepsCard
                        key={data.title}
                        title={data.title}
                        icon={data.icon}
                        listData={data.listData}
                    />
                ))}
            </div>
        </div>
    );
};
