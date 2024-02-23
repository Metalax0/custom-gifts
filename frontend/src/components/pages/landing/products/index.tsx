import "./style.css";
import { ProductCard } from "../../../molecules/productCard";

export const Products = () => {
    const tshirt = {
        title: "T-Shirt",
        imgArr: [
            "images/tshirt-2.jpg",
            "images/tshirt.jpg",
            "images/tshirt-3.jpg",
        ],
    };

    const frame = {
        title: "Frames",
        imgArr: [
            "images/frame.jpg",
            "images/frame-2.jpg",
            "images/frame-3.jpg",
        ],
    };

    const cups = {
        title: "Cups",
        imgArr: ["images/mug.jpg", "images/cup-2.jpg", "images/cup-3.jpg"],
    };

    const decals = {
        title: "Decals",
        imgArr: [
            "images/decals.jpg",
            "images/decal-2.jpg",
            "images/decal-3.jpg",
        ],
    };

    return (
        <div className="landing-products landing-section">
            <h3> Products </h3>
            <div className="landing-products-group">
                <ProductCard title={tshirt.title} imgArr={tshirt.imgArr} />
                <ProductCard title={cups.title} imgArr={cups.imgArr} />
                <ProductCard title={frame.title} imgArr={frame.imgArr} />
                <ProductCard title={decals.title} imgArr={decals.imgArr} />
            </div>
        </div>
    );
};
