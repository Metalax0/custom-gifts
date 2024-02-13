import "./App.css";
import NotificationProvider from "./misc/notification-provider";
import { Provider } from "react-redux";
import store from "./state-management/store";
import { AppRoutes } from "./components/route-and-layout/app-routes";

function App() {
    return (
        <div className="app">
            <Provider store={store}>
                <NotificationProvider>
                    <AppRoutes />
                </NotificationProvider>
            </Provider>
        </div>
    );
}

export default App;
