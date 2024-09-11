import { createBrowserRouter } from "react-router-dom";
import Home from "./home/Home";
import About from './About/About'
export const routes = createBrowserRouter([
    {
        path : "/",
        element : <Home/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: '*',
        element: <div className="text-lg text-red-400"><a href="/">Back To Home</a></div>
    }
])