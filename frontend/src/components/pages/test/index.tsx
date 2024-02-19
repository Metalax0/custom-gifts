import { apiRoutes } from "../../../api/apiRoutes";
import { useAPI } from "../../../hooks/useAPI";
import "./style.css";

export const TestComponenet = () => {
    const testAPI = useAPI();

    console.log("TEST", testAPI.data, testAPI.error);

    const handleClick = () => {
        // testAPI.API("GET", apiRoutes.test);
    };

    return (
        <div className="test">
            <h1>
                THIS IS TEST COMPONENT <b>Open Console</b>
            </h1>
            <button onClick={handleClick}> CLICK ME </button>
        </div>
    );
};
