import { Button } from "../../../atoms/button";
import "./style.css";

export const LandingSubHero = () => {
    const handleButtonClick = () => {};

    return (
        <div className="landing-sub-hero landing-section">
            <div className="sub-hero-top">
                <div className="sub-hero-left">
                    <h2>Customize Products to your liking</h2>
                    <h5>
                        Apparel and products for your family, friends, event,
                        business or team.
                    </h5>
                    <div className="sub-hero-bttn-group">
                        <Button
                            text="Browse Products"
                            type="primary"
                            handleButtonClick={handleButtonClick}
                        ></Button>
                        <Button
                            text="Start Designing"
                            type="secondary"
                            handleButtonClick={handleButtonClick}
                        ></Button>
                    </div>
                    <div className="sub-hero-left-info">
                        <div className="sub-hero-left-info-block">
                            <h4>Free Delivery</h4>
                            <h6>on orders over $350</h6>
                        </div>
                        <div className="sub-hero-left-info-block">
                            <h4>5+ customizations</h4>
                            <h6>on each product</h6>
                        </div>
                        <div className="sub-hero-left-info-block">
                            <h4>Quality guranteed</h4>
                            <h6>on base and design</h6>
                        </div>
                    </div>
                </div>
                <div className="sub-hero-right">
                    <img
                        className="sub-hero-product-img"
                        src="images/sub-hero-6.jpg"
                        alt="product img"
                    />
                </div>
            </div>
            <div className="sub-hero-bottom">
                <label className="sub-hero-txt-client">
                    <h5>Trusted by 1,000+ clients </h5>
                </label>
                <div className="sub-hero-bottom-client-container">
                    <img
                        className="sub-hero-client-img"
                        src="images/logo-1.png"
                        alt="client logo"
                    />
                    <img
                        className="sub-hero-client-img"
                        src="images/logo-2.png"
                        alt="client logo"
                    />
                    <img
                        className="sub-hero-client-img"
                        src="images/logo-3.png"
                        alt="client logo"
                    />
                    <img
                        className="sub-hero-client-img"
                        src="images/logo-4.png"
                        alt="client logo"
                    />
                    <img
                        className="sub-hero-client-img"
                        src="images/logo-5.png"
                        alt="client logo"
                    />
                    <img
                        className="sub-hero-client-img"
                        src="images/logo-6.png"
                        alt="client logo"
                    />
                    <img
                        className="sub-hero-client-img"
                        src="images/logo-7.png"
                        alt="client logo"
                    />
                </div>
            </div>
        </div>
    );
};
