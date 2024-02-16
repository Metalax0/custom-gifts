import "./style.css";
import { LandingHeroPropsType } from "../../../../types/LandingHeroPropsType";

export const LandingHero = ({ theme }: LandingHeroPropsType) => {
    return (
        <div className="landing-hero landing-section  ">
            {theme === "dark" ? <HeroBgVideoDark /> : <HeroBgVideoLight />}
            <div className="hero-txt-container">
                <h1 className="hero-txt-primary"> Clover.Gifts</h1>
                <h5>customize products to your liking</h5>
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
