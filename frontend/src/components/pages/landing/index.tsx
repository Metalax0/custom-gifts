import { useSelector } from "react-redux";
import "./style.css";
import { RootState } from "../../../state-management/store";
import { LandingHero } from "./hero";
import { LandingSubHero } from "./sub-hero";
import { Workings } from "./workings";

export const Landing = () => {
    const theme = useSelector((state: RootState) => state.ui.theme);

    return (
        <div className="landing">
            <LandingHero theme={theme} />
            <LandingSubHero />
            <Workings />
            <div className="landing-section">
                <h1>T-SHIRTS</h1>
            </div>
            <div className="landing-section">
                <h1>PHOTO FRAME</h1>
            </div>
            <div className="landing-section">
                <h1>CUPS & MUGS</h1>
            </div>
            <div className="landing-section">
                <h1>WALL DECAL</h1>
            </div>
        </div>
    );
};
