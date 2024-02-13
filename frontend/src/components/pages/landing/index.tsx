import { useSelector } from "react-redux";
import "./style.css";
import { RootState } from "../../../state-management/store";
import { LandingHero } from "./hero";
import { LandingSubHero } from "./sub-hero";
import { Workings } from "./workings";
import { ProductTShirt } from "./product-t-shirt";

export const Landing = () => {
    const theme = useSelector((state: RootState) => state.ui.theme);

    return (
        <div className="landing">
            <LandingHero theme={theme} />
            <LandingSubHero />
            <Workings />
            <ProductTShirt />
            <div className="landing-section">
                <h2>PHOTO FRAME</h2>
            </div>
            <div className="landing-section">
                <h2>CUPS & MUGS</h2>
            </div>
            <div className="landing-section">
                <h2>WALL DECAL</h2>
            </div>
        </div>
    );
};
