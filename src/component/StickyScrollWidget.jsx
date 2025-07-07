import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StickyEmailWidget = () => {
  const widgetRef = useRef(null);
  const [showWidget, setShowWidget] = useState(false);

  useEffect(() => {
    const heroSection = document.getElementById("hero");

    // Show after hero section
    ScrollTrigger.create({
      trigger: heroSection,
      start: "bottom bottom",
      onEnter: () => setShowWidget(true),
      onLeaveBack: () => setShowWidget(false),
    });
  }, []);

  return (
    <>
      {showWidget && (
        <a
          href="mailto:pketu916@gmail.com?subject=Let's%20Work%20Together"
          target="_blank"
          rel="noopener noreferrer"
          ref={widgetRef}
          className="fixed bottom-6 right-6 z-50 px-4 py-3 bg-gradient-to-tr from-cyan-400 to-blue-600 text-white rounded-full shadow-xl border-2 border-white/30 hover:scale-110 active:scale-95 transition-all cursor-pointer font-semibold"
        >
          Let's Work Together
        </a>
      )}
    </>
  );
};

export default StickyEmailWidget;
