import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
// import Marquee from "./Marquee";

export const Hero = () => {
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const rotatingTextRef = useRef(null);

  useEffect(() => {
    const texts = [
      "Full-Stack Developer 👨‍💻",
      "Code Wizard 🧙‍♂️",
      "Next.js & React Pro ⚛️",
      "API Tamer 🔌",
      "Tailwind Master 🎨",
    ];
    let i = 0;

    const rotate = () => {
      if (!rotatingTextRef.current) return;
      rotatingTextRef.current.innerText = texts[i];
      i = (i + 1) % texts.length;
    };

    rotate();
    const interval = setInterval(rotate, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-[calc(100dvh-68px)] bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] overflow-hidden backdrop-blur-sm"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(10,10,10,0.95), rgba(20,20,20,0.9)), url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Animated Background Elements - Moved to Bottom */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay - Moved to Bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/2 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      ></div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-end justify-center px-4 md:px-8 pb-12 md:pb-16">
        <div className="text-center text-white max-w-4xl mx-auto flex flex-col items-center gap-2">
          {/* Badge/Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-1">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-sm text-gray-300">
              Available for new projects
            </span>
          </div>

          {/* Main Heading */}
          <h1
            ref={headingRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-2"
          >
            <span className="inline text-white">I'm </span>
            <span className="inline bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Ketu Patel
            </span>
          </h1>

          {/* Description */}
          <p
            ref={paraRef}
            className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl leading-relaxed mb-2"
          >
            Whether it's refining an existing platform or launching something
            new, I partner with teams to deliver scalable React/Next.js apps,
            resilient Node.js APIs, and thoughtful user experiences—always with
            clean architecture and measurable impact.
          </p>

          {/* Rotating Text */}
          <div className="h-8 flex items-center justify-center mb-1">
            <p
              ref={rotatingTextRef}
              className="text-primary text-lg sm:text-xl md:text-2xl font-semibold"
            ></p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <a
              href="mailto:pketu916@gmail.com?subject=Let's%20Build%20Something%20Amazing"
              className="px-8 py-3 text-base sm:text-lg bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark transition-all rounded-full font-semibold text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105"
            >
              Start a Project
            </a>
            <Link
              to="/projects"
              className="px-8 py-3 text-base sm:text-lg bg-white/5 border border-white/20 hover:bg-white/10 transition-all rounded-full font-semibold text-white backdrop-blur-sm hover:scale-105"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
