import Intro from "../components/Intro";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Hello from "../components/Hello";

import { useState, useEffect } from "react";
import { inView, animate } from "motion";

const Page = () => {
    useEffect(() => {
        inView(".animated-left", (info) => {
            animate(
                info.target,
                { opacity: [0, 1], transform: ["translateX(-50px)", "none"] },
                { duration: 1, easing: "ease-in-out" }
            );
        });
        inView(".animated-right", (info) => {
            animate(
                info.target,
                { opacity: [0, 1], transform: ["translateX(50px)", "none"] },
                { duration: 1, easing: "ease-in-out" }
            );
        });
        inView(".animated-left-delay", (info) => {
            animate(
                info.target,
                { opacity: [0, 1], transform: ["translateX(-50px)", "none"] },
                { duration: 1, easing: "ease-in-out", delay: 0.5 }
            );
        });
        inView(".nav-item-animated", (info) => {
            const items = document.querySelectorAll("#navigation > a");
            const found = [...items].find(
                (item) =>
                    info.target.id.toLowerCase() == item.innerText.toLowerCase()
            );
            console.log(found);
            if (found)
                items.forEach((item) => item.classList.remove("text-red-500"));
            found.classList.add("text-red-500");
            return () => {
                found.classList.remove("text-red-500");
            };
        });
    }, []);
    return (
        <>
            <Hello />
            <Intro />
            <Portfolio />
            <Contact />
        </>
    );
};
export default Page;
