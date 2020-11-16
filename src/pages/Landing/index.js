import React from "react";
import { Navbar, HeroBanner, Subscription, Footer } from "../../components";

// Komponen Landing page
const Landing = () => {
  return (
    <React.Fragment>
      <Navbar />
      <HeroBanner />
      <Subscription />
      <Footer />
    </React.Fragment>
  );
};

export default Landing;
