// src/utils/ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "@studio-freight/lenis";

const lenis = new Lenis(); // Make sure this matches your main Lenis setup

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    lenis.scrollTo(0, { immediate: true }); // or use { offset: 0 } if needed
  }, [pathname]);

  return null;
}

export default ScrollToTop;
