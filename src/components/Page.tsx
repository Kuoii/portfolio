import Intro from "../components/Intro";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

import { useState, useEffect } from "react";

const Page = () => {
    let [scrollPosition, setScrollPosition] = useState(0);

    const introTop = document.getElementById("intro").getBoundingClientRect();

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
            console.log(introTop);
        };
        window.addEventListener("scroll", handleScroll);
        // return () => {
        //     window.removeEventListener("scroll", handleScroll);
        // };
    }, []);

    return (
        <>
            <Intro />
            <Portfolio />
            <Contact />
        </>
    );
};
export default Page;
