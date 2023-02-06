import './App.css';

import { useState, useEffect } from "react"

function App() {
    // const [name, setName] = useState("");
    const [data, setData] = useState([]);

    function fetchData() {
        fetch(`https://data.tycg.gov.tw//api/v1/rest/datasetInfo`)
            .then(e => { return e.json() })
            .then(response => {
                console.log(response)
                setData(response)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="App">
            {/* Hello, {name} */}
            {data.map((e, cnt) => {
                return (
                    <div key={`${e.resourceid}${e.datasetid}`}>{e.dataset}</div>
                )
            })}
        </div>
    );
}

export default App;