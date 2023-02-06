import React from "react"
import { Link } from "react-router-dom"


export default function Layout({ children }) {
    return (
        <React.Fragment>
            <nav>
                <Link to="/">Home Page</Link>
                {/* <a href="/">Home Page</a> */}
                <div> </div>
                <Link to="/about">About Page</Link>
                {/* <a href="/about">Home Page</a> */}
            </nav>
            {children}
        </React.Fragment>
    )
}