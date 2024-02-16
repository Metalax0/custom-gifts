import { useSelector } from "react-redux";
import "./style.css";
import { RootState } from "../../../state-management/store";
import { LandingHero } from "./hero";
import { LandingSubHero } from "./sub-hero";
import { Workings } from "./workings";
import { Products } from "./products";

export const Landing = () => {
    const theme = useSelector((state: RootState) => state.ui.theme);

    return (
        <div className="landing">
            <LandingHero theme={theme} />
            <LandingSubHero />
            <Workings />
            <Products />
        </div>
    );
};
