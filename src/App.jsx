import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

import "./App.css";
import Benefits from "./component/Benefits";
import Footer from "./component/footer";
import Header from "./component/header";
import { Hero } from "./component/hero";
import Services from "./component/Services";
import SkillGrid from "./component/skills";
import StickyScrollWidget from "./component/StickyScrollWidget";
import WorkSample from "./component/WorkSample";
import CustomCursor from "./component/CustomCursor";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
      smoothTouch: true,
    });

    // GSAP update on scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync ScrollTrigger with Lenis
    lenis.on("scroll", ScrollTrigger.update);
  }, []);

  return (
    <>
      <Header />
      <StickyScrollWidget />
      <Hero />
      <WorkSample />
      <SkillGrid />
      <Benefits />
      <Services />
      <Footer />
      <CustomCursor />
    </>
  );
}

export default App;
