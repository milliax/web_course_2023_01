import './App.css';

import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom"

import HomeIndex from './home';
import AboutPage from './about';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeIndex />
    }, {
        path: "/about",
        element: <AboutPage />
    }
])

export default function App() {
    return (
        <div className='App'>
            <RouterProvider router={router}/>
        </div>
    )
}
