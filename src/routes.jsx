import { createBrowserRouter } from "react-router-dom";
import Home from "./home/Home";
import About from './About/About'
import NotFound from "./other/NotFound";
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
        element: <NotFound />
    }
])