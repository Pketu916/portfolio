import React from "react";
import PageLayout from "../component/PageLayout";
import HeroSection from "../component/HeroSection";
import Experience from "../component/WorkExperience";
import Skills from "../component/skills";
import Benefits from "../component/Benefits";
import Marquee from "../component/Marquee";

export const About = () => {
  return (
    <PageLayout isDark={true}>
      <HeroSection
        title="About Me"
        subtitle="Get to know more about my experience, skills, and what drives me as a developer."
        isDark={true}
        height="60vh"
      />
      <Experience />
      <Skills />
      <Marquee />
      <Benefits />
    </PageLayout>
  );
};
export default About;
