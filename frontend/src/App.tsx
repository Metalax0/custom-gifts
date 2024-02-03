import "./App.css";
import { Landing } from "./components/pages/landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/pages/login";
import { Error } from "./components/pages/error";
import { Layout } from "./components/layout";
import { Register } from "./components/pages/register";
import NotificationProvider from "./misc/notification-provider";
import { TestComponenet } from "./components/pages/test";

function App() {
    return (
        <div className="app">
            <NotificationProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Landing />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/test" element={<TestComponenet />} />
                            <Route path="*" element={<Error />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </NotificationProvider>
        </div>
    );
}

export default App;
