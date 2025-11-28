import React from "react";
import PageLayout from "../component/PageLayout";
import HeroSection from "../component/HeroSection";
import Services from "../component/Services";
import Skills from "../component/skills";
import Benefits from "../component/Benefits";
import Marquee from "../component/Marquee";
import Faq from "../component/Faq";

export const ServicesPage = () => {
  return (
    <PageLayout isDark={true}>
      <HeroSection
        title="My Services"
        subtitle="Comprehensive web development solutions tailored to your needs. From design to deployment, I've got you covered."
        ctaText="Get In Touch"
        ctaLink="mailto:pketu916@gmail.com?subject=Let's%20Discuss%20Your%20Project"
        isDark={true}
        height="60vh"
      />
      <Services />
      <Marquee />
      <Benefits />
      <Skills />
      <Faq />
    </PageLayout>
  );
};
export default ServicesPage;
