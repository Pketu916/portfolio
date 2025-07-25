import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

import Benefits from "../component/Benefits";
import Footer from "../component/footer";
import Header from "../component/header";
import { Hero } from "../component/hero";
import Services from "../component/Services";
import WorkSample from "../component/WorkSample";
import CustomCursor from "../component/CustomCursor";
import Marquee from "../component/Marquee";
import Faq from "../component/Faq";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      duration: 1.2,
      gestureDirection: "vertical",
      smoothTouch: true,
      wheelMultiplier: 0.5,
      touchMultiplier: 0.5,
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
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      fixedMarkers: true,
    });
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Services />
      <WorkSample />
      <Benefits />
      <Faq />
      <Footer />
      <CustomCursor />
    </>
  );
}

export default Home;
