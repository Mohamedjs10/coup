import React from "react";
import Header from "./header";
import Footer from "./footer";
export default function headerFooerWrapper({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
