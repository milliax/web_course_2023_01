function Greeting({ name }) {
    return (
        <h1>Hello, {name}. Welcome!</h1>
    )
}


ReactDOM.render(
    <Greeting name="Taylor" />
    , document.getElementById("root")
)