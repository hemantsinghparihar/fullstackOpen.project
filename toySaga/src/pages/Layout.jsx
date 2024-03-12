import React from "react";
import { Outlet } from "react-router-dom";
import "../App.css";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
//import ScrolltoTop from "./ScrolltoTop";

function Layout() {
  // console.log(window.location.pathname)
  return (
    <div>
      <Header />
      <Outlet />

      <Footer />
      {/* <ScrolltoTop /> */}
    </div>
  );
}

export default Layout;
