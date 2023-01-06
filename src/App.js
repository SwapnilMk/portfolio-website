// import React, { useState, useEffect } from "react";
import '../src/css/style.css';
import "./App.css";
import Navbar from './components/NavBar';
// import Preloader from "../src/components/Pre";
import HomeFirst from './components/Home/HomeFirst';
import Footer from './components/Footer';
// import ScrollToTop from "./components/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";
import About from './components/About/About';

function App() {
  // const [load, upadateLoad] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     upadateLoad(false);
  //   }, 1200);

  //   return () => clearTimeout(timer);
  // }, []);
  return (
    <>
      {/* <Preloader load={load} /> */}
    <Navbar navBrand="Swapnil"/>
    {/* <ScrollToTop /> */}
    <HomeFirst name="SWAPNIL MAHADIK"/>
    <About/>
    <Footer />
    </>
  );
}

export default App;

