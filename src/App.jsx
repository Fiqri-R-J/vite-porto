import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Portfolio from "./pages/Portfolio";
import Certificate from "./pages/Certificate";
import Contact from "./pages/Contact";

function App() {
  const router = createBrowserRouter(
    routes,
    { basename: import.meta.env.DEV ? "/" : "/vite-porto/" },
    [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/skill",
        element: <Skill />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/certificate",
        element: <Certificate />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ]
  );

  return <RouterProvider router={router} />;
}

export default App;
