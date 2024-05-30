const PortfolioItem = () => {
    const projects = [
        {
            image: "/project1.jpg",
            name: "první kuře",
            git: "https://github.com/Kuoii/Timestamp-project.git",
            url: "none",
            technologies: ["Node.js", "Better-sqlite3", "trubectví"],
        },
        {
            image: "/project2.png",
            name: "druhé koře",
            git: "https://github.com/Kuoii/HeaderParser-project.git",
            url: "none",
            technologies: ["Node.js", "trubectví"],
        },
        {
            image: "/project3.jpg",
            name: "třetí kořectví",
            git: "https://github.com/Kuoii/HeaderParser-project.git",
            url: "none",
            technologies: [
                "Node.js",
                "Better-sqlite3",
                "Astro",
                "React.js",
                "Tailwind",
            ],
        },
    ];
    const handleEvent = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        console.log("haiii");
    };
    return (
        <div
            id="portfolio"
            className="flex flex-col min-h-screen h-fit nav-item-animated"
        >
            {projects.map((x, index) => (
                <div
                    className={
                        "flex portfolio-item my-8 w-[90vh]" +
                        (index % 2 === 0 ? " animated-right" : " animated-left")
                    }
                    id={"portfolio-item-" + index}
                >
                    <div className="">
                        <img
                            src={x.image}
                            className={
                                "w-64 h-44 rounded-md " +
                                (index % 2 === 0
                                    ? "float-left mr-6 "
                                    : "float-right ml-6")
                            }
                        />
                        <h3 className="text-3xl font-semibold">
                            {x.name.toUpperCase()}
                        </h3>
                        <p className="text-xl">
                            In publishing and graphic design, lorem ipsum is
                            common placeholder text used to demonstrate the
                            graphic elements of a document or visual
                            presentation, such as web pages, typography, and
                            graphical layout. It is a form of "greeking". Even
                            though using "lorem ipsum" often arouses curiosity
                            due to its resemblance to classical Latin, it is not
                            intended to have meaning. Where text is visible in a
                            document, people tend to focus on the textual
                        </p>
                        <div className="flex mb-2 mt-4">
                            {x.technologies.map((y) => (
                                <div
                                    className="bg-slate-800 text-slate-50 p-2 text-xl m-1 rounded-md"
                                    //onclick={handleEvent}
                                >
                                    {y}
                                </div>
                            ))}
                        </div>
                        <div className="links flex">
                            <a href={x.git}>
                                <img
                                    src="/github-logo.svg"
                                    className="w-12 bg-slate-800 m-1 rounded-md p-2"
                                />
                            </a>
                            <a href={x.url}>
                                <img
                                    src="/web-logo.svg"
                                    className="w-12 bg-slate-800 m-1 rounded-md p-2"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PortfolioItem;
