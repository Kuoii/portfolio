const Contact = () => {
    return (
        <div
            id="contact"
            className="h-screen flex flex-col justify-center g-green-400 nav-item-animated"
        >
            <h2 className="text-3xl my-4 font-bold">Napište mi na ICQ</h2>
            <div className="flex justify-end m-6">
                <a href="https://github.com/Kuoii" className="w-24">
                    <img src="/github-logo.svg" />
                </a>
                <a
                    href="https://www.linkedin.com/in/laura-kailov%C3%A1-97ab76291/"
                    className="w-24"
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
