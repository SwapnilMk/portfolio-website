import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Skills from "../components/Skills/Skills";


const Home = () => {
    const [darkMode, setDarkMode] = useState(false);
    function toggleDarkMode() {
        setDarkMode((prevDarkMode) => !prevDarkMode);
    }
    return (
        <>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}  />
            <Hero darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Skills darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </>
    );
    }

export default Home;