import { useState, useEffect } from "react";

const Intro = () => {
    return (
        <div
            id="intro"
            className="h-screen drop-shadow-md flex flex-col justify-center"
        >
            <h1 className="animate-slide-in-right text-8xl md:text-nowrap">
                HELLO WORLD
            </h1>
            <h2 className="animate-slide-in-right text-6xl m-8">
                I'm Koře Kořecí
            </h2>
        </div>
    );
};
export default Intro;
