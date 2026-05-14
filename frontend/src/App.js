import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { useAITextHighlight } from "./hooks/useAITextHighlight";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import People from "./pages/People";
import TechStack from "./pages/TechStack";
import Investors from "./pages/Investors";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";
import Marketing from "./pages/Marketing";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const GlobalAITextHighlight = () => {
  const { pathname } = useLocation();
  useAITextHighlight(pathname);
  return null;
};

function App() {
  return (
    <div className="App" style={{ background: 'var(--bg-page)', minHeight: '100vh' }}>
      <BrowserRouter>
        <ScrollToTop />
        <GlobalAITextHighlight />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/people" element={<People />} />
          <Route path="/tech-stack" element={<TechStack />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/:slug" element={<Legal />} />
        </Routes>
        <Footer />
        <Toaster position="bottom-right" />
      </BrowserRouter>
    </div>
  );
}

export default App;
