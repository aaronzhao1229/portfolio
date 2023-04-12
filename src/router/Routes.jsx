import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../components/About";
import HomePage from "../components/HomePage";
import Projects from "../components/Projects";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
          {path: '/', element: <HomePage />},
          {path: 'about', element: <About />},
          {path: 'projects', element: <Projects />},
        ]
    }
])