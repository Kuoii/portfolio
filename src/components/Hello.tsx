import { useState, useEffect } from "react";

const Hello = () => {
    return (
        <div
            id="hello"
            className="h-screen mb-4 drop-shadow-md flex flex-col justify-center nav-item-animated lg:p-6"
        >
            <h1 className="animated-left text-6xl lg:text-8xl text-nowrap mx-auto">
                HELLO WORLD
            </h1>
            <h2 className="animated-left-delay text-5xl lg:text-6xl lg:m-8 opacity-0 text-nowrap mx-auto my-8">
                I'm Laura Kailová
            </h2>
        </div>
    );
};
export default Hello;
