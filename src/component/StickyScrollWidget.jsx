import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const StickyScrollWidget = () => {
  const widgetRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const widget = widgetRef.current;
    const circle = circleRef.current;

    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const percent = Math.min(Math.round((scrollTop / docHeight) * 100), 100);
      setScrollPercent(percent);
    };

    window.addEventListener("scroll", updateScroll);
    updateScroll();

    ScrollTrigger.create({
      trigger: widget,
      start: "top bottom",
      onEnter: () => {
        gsap.fromTo(
          circle,
          { rotate: 0 },
          {
            rotate: 360,
            duration: 1.2,
            ease: "power2.out",
          }
        );
      },
    });

    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToNext = () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.scrollY;

    for (let i = 0; i < sections.length - 1; i++) {
      const nextTop =
        sections[i + 1].getBoundingClientRect().top + window.scrollY;

      if (scrollY < nextTop - 10) {
        sections[i + 1].scrollIntoView({ behavior: "smooth" });
        break;
      }
    }
  };

  return (
    <>
      {/* Top Arrow */}
      {scrollPercent < 5 && (
        <div
          className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer animate-bounce"
          onClick={scrollToNext}
        >
          <FaArrowDown className="text-3xl text-cyan-500 hover:text-cyan-400 transition" />
        </div>
      )}

      {/* Scroll Widget */}
      <div
        ref={widgetRef}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 cursor-pointer"
      >
        <div
          ref={circleRef}
          className="w-full h-full bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-full shadow-xl border-4 border-white/20 flex items-center justify-center"
        >
          <div
            ref={textRef}
            className="text-white font-bold text-sm pointer-events-none"
          >
            {scrollPercent}%
          </div>
        </div>
      </div>

      {/* Bottom Arrow */}
      {scrollPercent >= 100 && (
        <div
          className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer animate-bounce"
          onClick={scrollToTop}
        >
          <FaArrowUp className="text-3xl text-cyan-500 hover:text-cyan-400 transition" />
        </div>
      )}
    </>
  );
};

export default StickyScrollWidget;
