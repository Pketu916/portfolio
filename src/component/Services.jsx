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
        { opacity: 0, y: 50, scale: 0.9 },
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

      // iPhone-like 3D Hover Effect
      const handleMouseMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = -(y - centerY) / 15;
        const rotateY = (x - centerX) / 15;

        gsap.to(card, {
          rotateX,
          rotateY,
          scale: 1.05,
          ease: "power2.out",
          duration: 0.3,
        });
      };

      const resetCard = () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          ease: "power2.out",
          duration: 0.5,
        });
      };

      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", resetCard);

      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", resetCard);
      };
    });
  }, []);

  const services = [
    {
      title: "Web Development",
      description: "Responsive and scalable websites using React, Tailwind, and more.",
      bg: "from-purple-500 to-pink-500",
      titleColor: "text-pink-200",
    },
    {
      title: "UI/UX Design",
      description: "Clean, user-centric interfaces that balance function and beauty.",
      bg: "from-green-500 to-emerald-500",
      titleColor: "text-emerald-200",
    },
    {
      title: "Animation & Motion",
      description: "Delightful motion using GSAP, Framer Motion, and Lottie.",
      bg: "from-yellow-400 to-orange-500",
      titleColor: "text-yellow-200",
    },
    {
      title: "Backend Integration",
      description: "Robust APIs and secure backend systems with Node.js and MongoDB.",
      bg: "from-cyan-500 to-blue-600",
      titleColor: "text-cyan-200",
    },
  ];

  return (
    <section className="py-20 px-[5vw] bg-gradient-to-br from-gray-900 to-black text-white" id="services">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold mb-4 text-cyan-400">My Services</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          I help individuals and businesses bring their ideas to life with powerful and engaging digital solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 perspective-[1200px]">
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className={`p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br ${service.bg} cursor-pointer`}
            style={{ transformStyle: "preserve-3d" }}
          >
            <h3 className={`text-2xl font-semibold mb-3 ${service.titleColor}`}>
              {service.title}
            </h3>
            <p className="text-white/90">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
