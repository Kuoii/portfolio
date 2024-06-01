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
                { duration: 1, easing: "ease-in-out", delay: 0.2 }
            );
        });
        inView(".animated-right-delay", (info) => {
            animate(
                info.target,
                { opacity: [0, 1], transform: ["translateX(50px)", "none"] },
                { duration: 1, easing: "ease-in-out", delay: 0.2 }
            );
        });
        /*inView(".nav-item-animated", (info) => {
            console.log(info);
            const items =
                document.querySelectorAll<HTMLElement>("#navigation > a");
            const found = [...items].find(
                (item) =>
                    info.target.id.toLowerCase() == item.innerText.toLowerCase()
            );
            if (found)
                items.forEach((item) =>
                    item.classList.remove("scale-125", "drop-shadow-2xl")
                );
            found?.classList.add("scale-125", "drop-shadow-2xl");
            return () => {
                found?.classList.remove("scale-125", "drop-shadow-2xl");
            };
        });*/
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
