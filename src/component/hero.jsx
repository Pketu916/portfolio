import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "./Marquee";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const rotatingTextRef = useRef(null);
  const heroContentRef = useRef(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;

    const text = el.innerText;
    el.innerHTML = text
      .split("")
      .map((char) => `<span class="char inline-block">${char}</span>`)
      .join("");

    gsap.fromTo(
      ".char",
      { scale: 0, rotation: 180, opacity: 0 },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.6,
        repeat: -1,
        repeatDelay: 2,
        yoyo: true,
        ease: "back.out(1.7)",
      }
    );

    gsap.fromTo(
      paraRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        delay: 1,
        duration: 1,
        ease: "power3.out",
      }
    );

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
      gsap.to(rotatingTextRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.4,
        onComplete: () => {
          rotatingTextRef.current.innerText = texts[i];
          gsap.fromTo(
            rotatingTextRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.4 }
          );
          i = (i + 1) % texts.length;
        },
      });
    };

    rotate();
    const interval = setInterval(rotate, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      heroContentRef.current,
      { opacity: 1 },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "center top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-[calc(100dvh-68px)] bg-gradient-to-b from-[#0f0f0f] via-black to-[#0f0f0f] overflow-hidden"
    >
      {/* Hero Content */}
      <div
        ref={heroContentRef}
        className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white px-4 flex flex-col items-center gap-4 w-[90%]"
      >
        <h1
          ref={headingRef}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[0.15em] leading-tight text-white transition-all duration-500 hover:text-cyan-200"
        >
          I’m Ketu Patel
        </h1>

        <p
          ref={paraRef}
          className="text-base sm:text-lg md:text-xl text-white/80 max-w-xl mt-2"
        >
          A passionate full-stack developer bringing ideas to life with modern
          tech, clean code, and creative energy.
        </p>

        <p
          ref={rotatingTextRef}
          className="text-cyan-400 text-lg sm:text-xl md:text-2xl font-medium h-[1.5em] mt-2"
        ></p>

        <a
          href="mailto:pketu916@gmail.com?subject=Let’s%20Build%20Something"
          className="mt-6 px-6 py-2 text-base sm:text-lg bg-cyan-500 hover:bg-cyan-600 transition rounded-full font-semibold"
        >
          Let’s Connect
        </a>
      </div>

      {/* Marquee — not affected by ScrollTrigger */}
      <div className="absolute bottom-0 w-full">
        <Marquee />
      </div>
    </section>
  );
};

export default Hero;
