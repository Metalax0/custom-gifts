import "./App.css";
import { useEffect } from "react";
import { Landing } from "./pages/landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login";
import { Error } from "./pages/error";
import { Layout } from "./components/layout";

function App() {
    useEffect(() => {
        // document.querySelector("html")!.setAttribute("theme", "light");
        document.querySelector("html")!.setAttribute("theme", "dark");
    }, []);
    return (
        <div className="App">
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
