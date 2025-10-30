import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Lottery from "./pages/Lottery.tsx";
import ErrorPage from "./components/ErrorPage.tsx";
import Layout from "./components/Layout.tsx";
import App from "./App.tsx";

import "./index.css";

const routeDefinition = createRoutesFromElements(
  <Route
    path="/"
    element={
      <Layout>
        <App />
      </Layout>
    }
    errorElement={<ErrorPage />}
  >
    <Route index element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/lottery" element={<Lottery />} />
  </Route>
);

const appRouter = createBrowserRouter(routeDefinition);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
