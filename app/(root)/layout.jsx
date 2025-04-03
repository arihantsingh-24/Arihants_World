import Navbar from "@/components/Navbar";
import React from "react";

const RootLayout = async ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default RootLayout;
