import { createBrowserRouter } from "react-router-dom";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { About } from "./pages/About";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import { Certifications } from "./pages/Certifications";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "servicios", element: <Services /> },
      { path: "nosotros", element: <About /> },
      { path: "blog", element: <Blog /> },
      { path: "contacto", element: <Contact /> },
      { path: "certificaciones/:isoId", element: <Certifications /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
