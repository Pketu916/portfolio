import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const outerRef = useRef(null);
  const dotRef = useRef(null);
  const isHovering = useRef(false);

  useEffect(() => {
    const outer = outerRef.current;
    const dot = dotRef.current;

    let mouseX = 0;
    let mouseY = 0;
    let outerX = 0;
    let outerY = 0;
    let dotX = 0;
    let dotY = 0;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateCursor = () => {
      // Smooth outer circle movement
      outerX += (mouseX - outerX) * 0.1;
      outerY += (mouseY - outerY) * 0.1;

      // Faster dot movement
      dotX += (mouseX - dotX) * 0.3;
      dotY += (mouseY - dotY) * 0.3;

      if (outer) {
        outer.style.left = outerX + "px";
        outer.style.top = outerY + "px";
      }
      if (dot) {
        dot.style.left = dotX + "px";
        dot.style.top = dotY + "px";
      }

      requestAnimationFrame(animateCursor);
    };

    const handleMouseEnter = (e) => {
      if (
        e.target.tagName === "A" ||
        e.target.tagName === "BUTTON" ||
        e.target.closest("a") ||
        e.target.closest("button")
      ) {
        isHovering.current = true;
        if (outer) {
          outer.style.width = "50px";
          outer.style.height = "50px";
          outer.style.borderColor = "rgba(34, 211, 238, 0.8)";
        }
      }
    };

    const handleMouseLeave = (e) => {
      if (
        e.target.tagName === "A" ||
        e.target.tagName === "BUTTON" ||
        e.target.closest("a") ||
        e.target.closest("button")
      ) {
        isHovering.current = false;
        if (outer) {
          outer.style.width = "40px";
          outer.style.height = "40px";
          outer.style.borderColor = "rgba(34, 211, 238, 0.6)";
        }
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);

    animateCursor();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
    };
  }, []);

  return (
    <>
      {/* Outer Circle */}
      <div
        ref={outerRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
        style={{
          width: "40px",
          height: "40px",
          transform: "translate(-50%, -50%)",
          border: "2px solid rgba(34, 211, 238, 0.6)",
          borderRadius: "50%",
          backgroundColor: "transparent",
          backdropFilter: "blur(2px)",
          WebkitBackdropFilter: "blur(2px)",
          transition:
            "width 0.3s ease, height 0.3s ease, border-color 0.3s ease",
        }}
      ></div>

      {/* Center Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
        style={{
          width: "8px",
          height: "8px",
          backgroundColor: "rgb(34, 211, 238)",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 10px rgba(34, 211, 238, 0.8)",
        }}
      ></div>
    </>
  );
};

export default CustomCursor;
