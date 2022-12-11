import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Contact from "../Pages/Contact/Contact";
import Banner from "../Pages/Home/Banner/Banner";
import Home from "../Pages/Home/Home/Home";
import Project from "../Pages/Home/Project/Project";

export const router = createBrowserRouter([
    {
    path: "/",
    element :<Main></Main>, children :[ 
      {path : "/", element : <Home></Home>},
      {path : "/portfollio", element : <Project></Project>},
      {path : "/about", element : <Banner></Banner>},
      {path : "/contact", element : <Contact></Contact>},
    ]
    }
])