import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
function App() {
    return (
        <div className="h-screen">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about-me" element={<About />} />
                    <Route path="portfolio" element={<Portfolio />} />
                    <Route path="contact-me" element={<Contact />} />
                    <Route path="*" element={<div>404 Error</div>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
