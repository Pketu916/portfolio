import React from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import Experience from "../component/WorkExperience";
import Skills from "../component/skills";
import CustomCursor from "../component/CustomCursor";

export const About = () => {
  return (
    <>
      <Header />
      <Experience />
      <Skills />
      <Footer />
      <CustomCursor />
    </>
  );
};
export default About;
