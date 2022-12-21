import { createBrowserRouter } from "react-router-dom";
import Home from "../Main/Home/Home";
import Main from "../Main/Main";
import Blog from "../Pages/Blog/Blog";
import Chackout from "../Pages/Chackout/Chackout";
import ByCategory from "../Pages/Course/ByCategory/ByCategory";
import Course from "../Pages/Course/Course";
import Error404 from "../Pages/Error/Error404";
import FAQ from "../Pages/FAQ/FAQ";
import Login from "../Pages/login/Login";
import MainCourse from "../Pages/MainCourse/MainCourse";
import Orders from "../Pages/Orders/Orders";
import Premium from "../Pages/Premium/Premium";
import Profile from "../Pages/Profile/Profile";
import Register from "../Pages/Register/Register";
import Private from './Private'

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                loader: () => fetch('https://skill-cept-server-hasibul240.vercel.app/categories'),
                element: <Home />,
            },
            {
                path: "/home",
                loader: () => fetch('https://skill-cept-server-hasibul240.vercel.app/categories'),
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "course",
                element: <MainCourse />,
                
                children: [
                    {
                        path: "",
                        loader: () => fetch('https://skill-cept-server-hasibul240.vercel.app/course'),
                        element: <Course />,
                    },
                    {
                        path: "bycategory/:id",
                        loader: ({ params }) => fetch(`https://skill-cept-server-hasibul240.vercel.app/bycategory/${params.id}`),
                        element: <ByCategory/>
                    },
                ]
            },
            {
                path: "blog",
                element: <Blog/>,
            },
            {
                path: "faq",
                element: <FAQ/>,
            },
            {
                path: "orders",
                loader: () => fetch('https://skill-cept-server-hasibul240.vercel.app/course'),
                element: <Orders/>
            },
            {
                path: "checkout",
                loader: () => fetch('https://skill-cept-server-hasibul240.vercel.app/course'),
                element: <Private><Chackout/></Private>,
            },
            {
                path: "/profile",
                element: <Private><Profile/></Private>,
            },
            {
                path: "/premium",
                element: <Private><Premium/></Private>,
            },
            {
                path: "*",
                element: <Error404/>,
            }
        ]
    }
])