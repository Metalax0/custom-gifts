import "./App.css";
import { Landing } from "./components/pages/landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/pages/login";
import { Error } from "./components/pages/error";
import { Layout } from "./components/layout";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Landing />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="*" element={<Error />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
