import { isDarkTheme } from "../../../functions/themeToggle";
import "./style.css";

export const Landing = () => {
    return (
        <div className="landing">
            <div className="landing-hero">
                <video autoPlay muted loop id="myVideo">
                    <source
                        src={`videos/hero-bg-${isDarkTheme() ? 2 : 3}.mp4`}
                        type="video/mp4"
                    />
                </video>
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
