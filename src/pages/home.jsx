import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

import Benefits from "../component/Benefits";
import Footer from "../component/footer";
import Header from "../component/header";
import { Hero } from "../component/hero";
import Services from "../component/Services";
import SkillGrid from "../component/skills";
import WorkSample from "../component/WorkSample";
import CustomCursor from "../component/CustomCursor";
import WorkExperience from "../component/WorkExperience";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      duration: 1.2,
      gestureDirection: "vertical",
      smoothTouch: true,
      wheelMultiplier: 1.1, // Optional: boost scroll speed on wheel
    });

    // Sync ScrollTrigger with Lenis
    lenis.on("scroll", ScrollTrigger.update);

    // Replace window.requestAnimationFrame to tie GSAP with Lenis
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // ScrollTrigger defaults to `scroller: window`, but Lenis wraps it
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return arguments.length ? lenis.scrollTo(value) : lenis.scroll;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      fixedMarkers: true,
    });

  }, []);

  return (
    <>
      <Header isHome={true} />
      <Hero />
      <WorkSample />
      <SkillGrid />
      <WorkExperience/>
      <Benefits />
      <Services />
      <Footer />
      <CustomCursor />
    </>
  );
}

export default Home;
