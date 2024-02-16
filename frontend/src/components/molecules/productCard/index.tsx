import { ProductCardPropsType } from "../../../types/productCardType";
import "./style.css";

export const ProductCard = ({ imgArr, title }: ProductCardPropsType) => {
    return (
        <div className="product-card">
            <h3 className="product-card-title">{title}</h3>
            <img
                className="product-card-img"
                src={imgArr[0]}
                alt="t-shirt product img"
            />
        </div>
    );
};
