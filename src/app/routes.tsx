import { createBrowserRouter } from "react-router-dom";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { About } from "./pages/About";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "servicios", Component: Services },
      { path: "nosotros", Component: About },
      { path: "blog", Component: Blog },
      { path: "contacto", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
