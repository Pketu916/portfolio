import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StickyScrollWidget = () => {
  const widgetRef = useRef(null);
  const circleRef = useRef(null);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [showWidget, setShowWidget] = useState(false);

  useEffect(() => {
    const widget = widgetRef.current;
    const circle = circleRef.current;
    const heroSection = document.getElementById("hero");

    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const percent = Math.min(Math.round((scrollTop / docHeight) * 100), 100);
      setScrollPercent(percent);
    };

    window.addEventListener("scroll", updateScroll);
    updateScroll();

    // GSAP Animation when widget appears
    ScrollTrigger.create({
      trigger: heroSection,
      start: "bottom bottom",
      onEnter: () => setShowWidget(true),
      onLeaveBack: () => setShowWidget(false),
    });

    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <>
      {showWidget && (
        <div
          ref={widgetRef}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 cursor-pointer"
        >
          <div
            ref={circleRef}
            className="w-full h-full bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-full shadow-xl border-4 border-white/20 flex items-center justify-center"
          >
            <div className="text-white font-bold text-sm pointer-events-none">
              {scrollPercent}%
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StickyScrollWidget;
