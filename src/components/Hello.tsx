import { useState, useEffect } from "react";

const Hello = () => {
    return (
        <div
            id="hello"
            className="h-screen mb-4 drop-shadow-md flex flex-col justify-center nav-item-animated"
        >
            <h1 className="animated-left text-8xl md:text-nowrap">
                HELLO WORLD
            </h1>
            <h2 className="animated-left-delay text-6xl m-8 opacity-0">
                I'm Koře Kořecí
            </h2>
        </div>
    );
};
export default Hello;
