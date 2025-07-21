import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const outerRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const outer = outerRef.current;
    const dot = dotRef.current;

    const moveCursor = (e) => {
      // Slow follow for outer circle
      gsap.to(outer, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.25,
        ease: "power4.out",
      });

      // Fast follow for center dot
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power4.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      {/* Outer Circle */}
      <div
        ref={outerRef}
        className="fixed top-0 left-0 z-[40] pointer-events-none"
        style={{
          width: "40px",
          height: "40px",
          transform: "translate(-50%, -50%)",
          // border: "2px solid rgba(255, 255, 255, 0.6)",
          border: "2px solid rgba(6 ,182 ,212 ,0.6)",
          borderRadius: "50%",
          backgroundColor: "transparent",
          backdropFilter: "blur(2px)",
          WebkitBackdropFilter: "blur(2px)",
        }}
      ></div>

      {/* Center Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          width: "6px",
          height: "6px",
          backgroundColor: "rgba(255, 255, 0, 0.6)",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
        }}
      ></div>
    </>
  );
};

export default CustomCursor;
