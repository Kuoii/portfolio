const Navigation = () => {
    const navItems = [
        { name: "Hello", href: "#hello" },
        { name: "Introduction", href: "#introduction" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Contact", href: "#contact" },
    ];

    const aStyle =
        "hover:scale-125 hover:drop-shadow-2xl active:scale-125 active:drop-shadow-2xl transition-all duration-300 ease-in-out drop-shadow-md";
    const spanStyle =
        "px-2 bg-gradient-to-r bg-[length:0%_2px] group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out";
    return (
        <div
            id="navigation"
            className=" flex flex-row lg:flex-col gap-4 fixed text-2xl h-fit justify-center content-center top-[50%] translate-y-[-50%]"
        >
            {navItems.map((x, index) => (
                <a href={x.href} className={aStyle} id={"nav-item-" + index}>
                    <div className="">{x.name}</div>
                </a>
            ))}
            <p></p>
        </div>
    );
};

export default Navigation;
