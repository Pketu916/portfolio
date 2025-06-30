import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const LiquidCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{
        width: "20px",
        height: "20px",
        transform: "translate(-50%, -50%)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        background: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        borderRadius: "50%",
        boxShadow: "0 0 6px rgba(0, 255, 255, 0.3)",
        transition: "all 0.2s ease",
        filter: "drop-shadow(0 0 4px rgba(0, 255, 255, 0.2))",
      }}
    ></div>
  );
};

export default LiquidCursor;
