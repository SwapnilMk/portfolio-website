import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "MERN Stack Developer",
                    "UI/UX Designer",
                    "React Js Developer",
                    "Web Developer",
                    "Node Js Developer",
                    "Front End Developer",
                    "Javascript Developer"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;
