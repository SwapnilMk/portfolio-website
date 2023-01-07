import React, { useState, useEffect } from "react";
import '../src/css/style.css';
import "./App.css";
import Navbar from './components/NavBar';
import Preloader from "../src/components/Pre";
import HomeFirst from './components/Home/HomeFirst';
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import About from './components/About/About';
import Projects from "./components/Projects/Projects";
import ResumeNew from "./components/Resume/ResumeNew";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar navBrand="Swapnil" />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomeFirst name="SWAPNIL MAHADIK" />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<ResumeNew />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

