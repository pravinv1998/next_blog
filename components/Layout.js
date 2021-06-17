import React from "react";
import Navbar from "../components/Navbar";
import Hero from "./Hero";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Hero />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
