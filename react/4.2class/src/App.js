import React from "react"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { color: props?.favcolor };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ color: "red" })
        }, 2000)
        this.setState({ color: "green" })
    }

    changeColor = () => {
        console.log("change color", this.state)
        this.setState({ color: "pink" }, ()=>console.log(this.state))
    }

    render() {
        return (
            <React.Fragment>
                <h1>My favorite color is {this.state.color}</h1>
                <button type="button" onClick={this.changeColor}>Change color</button>
            </React.Fragment>
        )
    }
}

export default App;
