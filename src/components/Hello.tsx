const Hello = (props: { name: string }) => {
    const names = ["kjahsjdl", "Hubert", "Kubíček"];
    return (
        <>
            <h1>Helloooo {props.name}</h1>
            {names.map((x) => (
                <h2> {x} </h2>
            ))}
        </>
    );
};
export default Hello;
