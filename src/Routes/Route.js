import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
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
      
      {path : "/contact", element : <Contact></Contact>},
      {path : "/about", element : <About></About>},
    ]
    }
])