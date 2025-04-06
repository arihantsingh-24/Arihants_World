import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const RootLayout = async ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer/>
    </>
  );
};

export default RootLayout;
