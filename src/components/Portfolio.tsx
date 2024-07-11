const PortfolioItem = () => {
    const projects = [
        {
            image: "/TodoApp1.png",
            name: "TODO aplikace",
            description:
                "Moje první fullstack aplikace. Pomocí REST api umí ukládat, upravovat a mazat úkoly, které si k danému kalendářnímu dni uživatel vytvoří.",
            git: "https://github.com/Kuoii/todo-app.git",
            url: "none",
            technologies: [
                "Node.js",
                "SQLite",
                "JavaScript",
                "TypeScript",
                "HTML a CSS",
                "Tailwind",
            ],
        },
        {
            image: "/fcc1.png",
            name: "FreeCodeCamp projekty",
            description:
                "Na FreeCodeCampu postupně doplňuji svoje znalosti, hlavně konkrétně v oblasti JavaScriptu, Front Endových knihoven a Back Endových knihoven. Podle zadání, které jsou součástí kurzů, jsem už vytvořila několik menších projektů, které lze vidět na mém GitHubu.",
            git: "https://github.com/Kuoii/ExerciseTracker-project.git",
            url: "https://www.freecodecamp.org/fcc0f61b695-e42e-4d92-b35f-4adcd15aeaf3",
            technologies: ["Node.js", "JavaScript", "React.js"],
        },
        {
            image: "/Portfolio1.png",
            name: "Portfolio",
            description:
                "Stránka, na které se právě nacházíte :) Toto portfolio představuje výběr mých prací, zaměřených na vývoj webových aplikací a grafický design.",
            git: "https://github.com/Kuoii/portfolio.git",
            url: "https://kailova-portfolio.pages.dev/",
            technologies: ["Astro", "Typescript", "React.js", "Tailwind"],
        },
    ];
    const handleEvent = (e: MouseEvent) => {
        e.preventDefault();
        console.log("...");
    };
    return (
        <div
            id="portfolio"
            className="flex flex-col min-h-screen h-fit nav-item-animated md:w-[80%] lg:w-auto md:mx-auto"
        >
            {projects.map((x, index) => (
                <div
                    className={
                        "flex portfolio-item my-8 p-6 " +
                        (index % 2 === 0 ? "animated-right" : "animated-left")
                    }
                    id={"portfolio-item-" + index}
                >
                    <div className="">
                        <img
                            src={x.image}
                            className={
                                "w-64 h-44 rounded-md mx-auto drop-shadow-lg " +
                                (index % 2 === 0
                                    ? "md:float-left md:mr-6 "
                                    : "md:float-right md:ml-6")
                            }
                        />
                        <h3 className="text-3xl font-semibold mb-3 mt-8 text-center md:text-left md:mt-0 underline underline-offset-4 decoration-2 decoration-emerald-400">
                            {x.name.toUpperCase()}
                        </h3>
                        <div
                            className={
                                index % 2 === 0
                                    ? " animated-right-delay"
                                    : " animated-left-delay"
                            }
                        >
                            <p className="text-2xl">{x.description}</p>
                            <div className="flex flex-wrap justify-center md:justify-normal mb-4 mt-6">
                                {x.technologies.map((y) => (
                                    <div className="bg-slate-800 p-2 text-xl m-1 rounded-md text-emerald-400">
                                        {y}
                                    </div>
                                ))}
                            </div>
                            <div className="links flex justify-center md:justify-normal">
                                <a href={x.git} className="px-2 md:px-0">
                                    <img
                                        src="/github-logo.svg"
                                        className="w-16 lg:w-12 bg-slate-800 m-1 rounded-md p-2"
                                    />
                                </a>
                                <a
                                    href={x.url}
                                    className={
                                        "px-2 md:px-0 " +
                                        (x.url === "none"
                                            ? "invisible"
                                            : "visible")
                                    }
                                >
                                    <img
                                        src="/web-logo.svg"
                                        className="w-16 lg:w-12 bg-slate-800 m-1 rounded-md p-2"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PortfolioItem;
