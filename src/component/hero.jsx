import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImg from "../assets/hero-bg.jpg";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const rotatingTextRef = useRef(null);
  const bgRef = useRef(null);
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

    const texts = ["Creative Thinker", "Problem Solver", "UI Enthusiast", "Web Craftsman"];
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
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    if (heroContentRef.current) {
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
    }
  }, []);

  return (
    <section id="hero" className="relative w-full h-[100dvh] overflow-hidden">
      {/* Optional Background */}
      <figure ref={bgRef} className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </figure>

      {/* Hero Content */}
      <div
        ref={heroContentRef}
        className="absolute top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center px-4 flex flex-col items-center gap-4 w-[90%]"
      >
        <h1
          ref={headingRef}
          className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-wide text-white leading-tight"
        >
          Hello, I'm Ketu
        </h1>

        <p
          ref={paraRef}
          className="text-base sm:text-lg md:text-xl text-white/80 max-w-md mt-2"
        >
          A Frontend Developer crafting smooth digital experiences
        </p>

        <p
          className="text-cyan-400 text-lg sm:text-xl md:text-2xl font-medium h-[1.5em] mt-2"
          ref={rotatingTextRef}
        ></p>

        <a
          href="mailto:pketu916@gmail.com?subject=Let's%20Work%20Together"
          className="mt-6 px-6 py-2 text-base sm:text-lg bg-cyan-500 hover:bg-cyan-600 transition rounded-full font-semibold"
        >
          Send Email
        </a>
      </div>
    </section>
  );
};

export default Hero;
