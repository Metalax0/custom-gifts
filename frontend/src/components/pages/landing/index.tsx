import { useSelector } from "react-redux";
import "./style.css";
import { RootState } from "../../../state-management/store";

export const Landing = () => {
    const theme = useSelector((state: RootState) => state.ui.theme);

    return (
        <div className="landing">
            <div className="landing-hero">
                {theme === "dark" ? <HeroBgVideoDark /> : <HeroBgVideoLight />}
                <div className="hero-txt-container">
                    <h1 className="hero-txt-primary"> Clover.Gifts</h1>
                    <h5 className="hero-txt-secondary">
                        customize products to your liking
                    </h5>
                </div>
            </div>
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

const HeroBgVideoLight = () => {
    return (
        <video autoPlay muted loop id="myVideo">
            <source src={`videos/hero-bg-3.mp4`} type="video/mp4" />
        </video>
    );
};

const HeroBgVideoDark = () => {
    return (
        <video autoPlay muted loop id="myVideo">
            <source src={`videos/hero-bg-2.mp4`} type="video/mp4" />
        </video>
    );
};
