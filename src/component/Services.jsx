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
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );

      // Hover effect
      const handleMouseMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = -(y - centerY) / 10;
        const rotateY = (x - centerX) / 10;

        gsap.to(card, {
          rotateX,
          rotateY,
          scale: 1.04,
          ease: "power4.out",
          duration: 0.1,
        });
      };

      const resetCard = () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          ease: "power4.out",
          duration: 0.1,
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
      description: "Modern and responsive websites using React, Next.js, and Tailwind CSS.",
      bg: "from-purple-600 to-pink-500",
      titleColor: "text-pink-100",
    },
    {
      title: "UI/UX Design",
      description: "User-first interfaces with clean structure and engaging interactions.",
      bg: "from-green-500 to-emerald-500",
      titleColor: "text-emerald-100",
    },
    {
      title: "Motion & Animation",
      description: "Stunning motion UI with GSAP, Framer Motion, and Lottie.",
      bg: "from-yellow-400 to-orange-500",
      titleColor: "text-yellow-100",
    },
    {
      title: "Backend & APIs",
      description: "Secure and scalable APIs using Node.js, Express, and MongoDB.",
      bg: "from-cyan-500 to-blue-600",
      titleColor: "text-cyan-100",
    },
    {
      title: "Performance Optimization",
      description: "Boosting load times, SEO, and Lighthouse scores across projects.",
      bg: "from-rose-500 to-red-500",
      titleColor: "text-red-100",
    },
    {
      title: "Deployment & CI/CD",
      description: "Automated pipelines and seamless cloud deployment with Vercel & Netlify.",
      bg: "from-indigo-600 to-blue-500",
      titleColor: "text-indigo-100",
    },
  ];

  return (
      <section
      className="py-8 md:py-24 px-[5vw] bg-gradient-to-br from-[#0f0f0f] via-black to-[#0f0f0f] text-white"
      id="services"
    >
      <div className="text-center mb-8 md:mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-cyan-400">My Services</h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
          I craft full-stack experiences that blend design, performance, and modern development practices.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 perspective-[1500px]">
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className={`min-h-[220px] p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300 ease-in-out bg-gradient-to-br ${service.bg} cursor-pointer`}
            style={{ transformStyle: "preserve-3d" }}
          >
            <h3 className={`text-2xl font-semibold mb-3 ${service.titleColor}`}>
              {service.title}
            </h3>
            <p className="text-white/90 leading-relaxed text-sm sm:text-base">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
