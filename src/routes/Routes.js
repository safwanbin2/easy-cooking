import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import BookMark from "../pages/BookMark";
import Category from "../pages/Category";
import Home from "../pages/Home";
import HowTo from "../pages/HowTo";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/',
                loader: async () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a'),
                element: <Home></Home>
            },
            {
                path: '/category/:cat',
                loader: async ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.cat}`),
                element: <Category></Category>
            },
            {
                path: '/howto/:id',
                loader: async ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`),
                element: <HowTo></HowTo>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/bookmark',
                element: <PrivateRoute><BookMark></BookMark></PrivateRoute>
            }
        ]
    }
])


export default router;