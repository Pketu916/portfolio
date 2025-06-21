import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  const services = [
    {
      title: "Web Development",
      description: "Responsive and scalable websites using React, Tailwind, and more.",
    },
    {
      title: "UI/UX Design",
      description: "Clean, user-centric interfaces that balance function and beauty.",
    },
    {
      title: "Animation & Motion",
      description: "Delightful motion using GSAP, Framer Motion, and Lottie.",
    },
    {
      title: "Backend Integration",
      description: "Robust APIs and secure backend systems with Node.js and MongoDB.",
    },
  ];

  return (
    <section className="py-20 px-[5vw] bg-gray-950 text-white" id="services">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold mb-4">My Services</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          I help individuals and businesses bring their ideas to life with powerful and engaging digital solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
