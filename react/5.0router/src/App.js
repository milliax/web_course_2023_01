import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"
import ErrorPage from "./error-page";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Home</div>,
        errorElement: <ErrorPage />
    }, {
        path: "/hello",
        element: <div>Hello</div>
    }
])

function App() {
    return (
        <React.Fragment>
            <header>
                <div>Home</div>
                <div>About US</div>
            </header>
            <RouterProvider router={router} />
        </React.Fragment>

    );
}

export default App;
