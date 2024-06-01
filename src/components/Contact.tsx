const Contact = () => {
    return (
        <div
            id="contact"
            className="h-screen flex flex-col justify-center p-6 md:items-center lg:items-start nav-item-animated"
        >
            <h2 className="text-3xl my-4 font-bold animated-left">KONTAKT</h2>
            <h3 className="text-2xl animated-left-delay">
                jestli vás moje práce zaujala, neváhejte se ozvat :)
            </h3>
            <div className="flex my-12 animated-left-delay">
                <a href="https://github.com/Kuoii" className="w-24 mr-8">
                    <img src="/github-logo.svg" />
                </a>
                <a
                    href="https://www.linkedin.com/in/laura-kailov%C3%A1-97ab76291/"
                    className="w-24 mr-8"
                >
                    <img src="/linkedin-logo.svg" />
                </a>
                <a href="mailto:laura.kailova@gmail.com" className="w-24">
                    <img src="/mail.svg" />
                </a>
            </div>
        </div>
    );
};

export default Contact;
