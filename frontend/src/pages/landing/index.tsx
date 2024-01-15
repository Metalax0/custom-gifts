import { LandingHero } from "./hero";
import { LandingProducts } from "./products";
import "./style.css";

export const Landing = () => {
    return (
        <div className="landing">
            <LandingHero />
            <LandingProducts />
        </div>
    );
};
