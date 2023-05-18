import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import SinglePortfolio from "./pages/SinglePortfolio/SinglePortfolio";
import { useEffect } from "react";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="h-screen">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about-me" element={<About />} />
          <Route path="portfolios" element={<Portfolio />} />
          <Route path="works/:id" element={<SinglePortfolio />} />
          <Route path="contact-me" element={<Contact />} />
          <Route path="*" element={<div>404 Error</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
