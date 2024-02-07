import { Button } from "../../../atoms/button";
import "./style.css";

export const LandingSubHero = () => {
    const handleButtonClick = () => {};

    return (
        <div className="landing-sub-hero landing-section">
            <div className="sub-hero-top">
                <div className="sub-hero-left">
                    <h1 className="sub-hero-h1">
                        Cuztomize Products to your liking
                    </h1>
                    <h2 className="sub-hero-h2">
                        Apparel and products for your family, friends, event,
                        business or team.
                    </h2>
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
                            <h2 className="sub-hero-h2">Free Delivery</h2>
                            <label className="sub-hero-txt">
                                on orders over $350
                            </label>
                        </div>
                        <div className="sub-hero-left-info-block">
                            <h2 className="sub-hero-h2">5+ customizations</h2>
                            <label className="sub-hero-txt">
                                on each product
                            </label>
                        </div>
                        <div className="sub-hero-left-info-block">
                            <h2 className="sub-hero-h2">Quality guranteed</h2>
                            <label className="sub-hero-txt">
                                on base and design
                            </label>
                        </div>
                    </div>
                </div>
                <div className="sub-hero-right">
                    <img
                        className="sub-hero-product-img"
                        // src="images/sub-hero-4.jpg"
                        src="images/sub-hero-6.jpg"
                        alt="product img"
                    />
                </div>
            </div>
            <div className="sub-hero-bottom">
                <label className="sub-hero-txt-client">
                    <b>
                        Trusted by 1,000+ clients all over the world (real stats
                        xD)
                    </b>
                </label>
                <div>
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
