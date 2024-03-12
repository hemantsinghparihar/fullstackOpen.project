import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./pages/App.jsx";
import "./App.css";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import Collaborate from "./pages/Collaborate.jsx";
import Institution from "./pages/Institution.jsx";
import CSR from "./pages/CSR.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Layout />}>
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/collaborate" element={<Collaborate />} />
        <Route path="/institution" element={<Institution />} />
        <Route path="/csr" element={<CSR />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
