function Greeting({ name }) {
    return React.createElement(
        "h1",
        { className: "greeting" },
        "Hello, ",
        React.createElement("i", null, name),
        ". Welcome"
    )
}


ReactDOM.render(
    React.createElement(
        Greeting,
        { name: "Taylor" }
    )
    , document.getElementById("root")
)