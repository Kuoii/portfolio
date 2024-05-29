const Navigation = () => {
    const aStyle =
        "hover:scale-125 transition-all duration-300 ease-in-out drop-shadow-md hover:drop-shadow-2xl";
    const spanStyle =
        "px-2 bg-gradient-to-r bg-[length:0%_2px] group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out";
    return (
        <div
            id="navigation"
            className=" flex flex-col gap-4 fixed text-2xl h-fit justify-center content-center top-[50%] translate-y-[-50%]"
        >
            <a href="#intro" className={aStyle}>
                <div className="">Hello</div>
            </a>
            <a href="#portfolio" className={aStyle}>
                <div>Portfolio</div>
            </a>
            <a href="#contact" className={aStyle}>
                <span
                    className={`from-transparent to-emerald-400 ${spanStyle}`}
                >
                    Contact
                </span>
            </a>
        </div>
    );
};

export default Navigation;
