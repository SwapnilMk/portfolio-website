import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";


const Home = () => {
    const [darkMode, setDarkMode] = useState(false);
    function toggleDarkMode() {
        setDarkMode((prevDarkMode) => !prevDarkMode);
    }
    return (
        <>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}  />
            <Hero />
        </>
    );
    }

export default Home;