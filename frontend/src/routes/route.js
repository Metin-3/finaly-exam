import MainRoot from "../components/MainRoot";
import About from "../page/About";
import Add from "../page/Add/Add";
import Blog from "../page/Blog";
import Galery from "../page/Galery";
import Home from "../page/Home";
import Menu from "../page/Menu";



const ROUTES = [
    {
        path: '/',
        element: <MainRoot />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "menu",
                element: <Menu />
            },
            {
                path: "galery",
                element: <Galery />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "blog",
                element: <Blog />
            },
            {
                path: "add",
                element: <Add />
            }
        ]
    }
]

export default ROUTES


