import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Benefits = () => {
  const benefitRefs = useRef([]);

  useEffect(() => {
    benefitRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 60,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        }
      );
    });
  }, []);

  const benefits = [
    {
      title: "Fast Performance",
      description:
        "Optimized code and lazy loading to ensure fast load times and responsiveness.",
    },
    {
      title: "Mobile First",
      description:
        "Designed with mobile-first approach to look great on every screen size.",
    },
    {
      title: "Smooth Animations",
      description:
        "Engaging user interactions using modern animation tools like GSAP.",
    },
    {
      title: "SEO Friendly",
      description:
        "Structured content with proper tags to boost your discoverability.",
    },
    {
      title: "Clean, Scalable Code",
      description:
        "Built with reusable components and clean architecture for easy maintenance and future scaling.",
    },
    {
      title: "Modern Tech Stack",
      description:
        "Utilizing latest technologies like React.js, Tailwind, Framer Motion, and optimized backend solutions.",
    },
  ];

  return (
    <section
      className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-[5vw] overflow-hidden"
      id="benefits"
    >
      {/* Top Wavy SVG */}
      <svg
        className="absolute top-0 left-0 w-full h-32 md:h-48 text-gray-900"
        preserveAspectRatio="none"
        viewBox="0 0 1440 320"
      >
        <path
          fill="currentColor"
          d="M0,32L80,42.7C160,53,320,75,480,90.7C640,107,800,117,960,112C1120,107,1280,85,1360,74.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>

      {/* Title */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-4xl md:text-5xl font-extrabold tracking-wide uppercase drop-shadow-lg animate-pulse">
          Why Choose Me?
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4">
          Explore the key benefits that make my development approach efficient,
          innovative, and future-proof.
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((item, index) => (
          <div
            key={index}
            ref={(el) => (benefitRefs.current[index] = el)}
            className="backdrop-blur-sm bg-white/5 border border-gray-700 hover:border-cyan-500 rounded-2xl p-6 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group cursor-pointer"
          >
            <h3 className="text-xl font-bold mb-3 text-cyan-400 group-hover:text-white transition">
              {item.title}
            </h3>
            <p className="text-gray-400 group-hover:text-gray-200 transition">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Wavy SVG */}
      <svg
        className="absolute bottom-0 left-0 w-full h-32 md:h-48 text-black"
        preserveAspectRatio="none"
        viewBox="0 0 1440 320"
      >
        <path
          fill="currentColor"
          d="M0,224L80,229.3C160,235,320,245,480,234.7C640,224,800,192,960,181.3C1120,171,1280,181,1360,186.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default Benefits;
