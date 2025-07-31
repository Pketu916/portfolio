import React from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import Services from "../component/Services";
import Skills from "../component/skills";
import Benefits from "../component/Benefits";
import CustomCursor from "../component/CustomCursor";
import Marquee from "../component/Marquee";
import Faq from "../component/Faq";

export const ServicesPage = () => {
  return (
    <>
      <Header />
      <Services />
      <Marquee/>
      <Benefits />
      <Skills />
      <Faq />
      <Footer />
      <CustomCursor />
    </>
  );
};
export default ServicesPage;
