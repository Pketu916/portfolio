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
      title: "Full Stack Web Applications",
      description:
        "I build full websites and apps using tools like React, Next.js, and Node.js. Whether it's a simple dashboard or a full product, I handle both front and back end.",
      bg: "from-yellow-400 to-orange-500",
      titleColor: "text-yellow-100",
    },
    {
      title: "Webflow Development",
      description:
        "I create clean, fast, and mobile-friendly websites using Webflow. From landing pages to full websites with CMS and animations, everything is custom-made to match your brand.",
      bg: "from-purple-600 to-pink-500",
      titleColor: "text-pink-100",
    },
    {
      title: "Custom Code & Integrations",
      description:
        "Need extra features in Webflow? I can add custom code, connect APIs, and make your site do more than what Webflow offers out of the box.",
      bg: "from-green-500 to-emerald-500",
      titleColor: "text-emerald-100",
    },
    {
      title: "UI/UX Design",
      description:
        "I design websites that are easy to use and look great. The goal is always a smooth user experience that feels good on both desktop and mobile.",
      bg: "from-cyan-500 to-blue-600",
      titleColor: "text-cyan-100",
    },
    {
      title: "Performance & SEO Optimization",
      description:
        "I make sure your website loads fast, ranks well on Google, and works perfectly on all devices. Better speed means better results.",
      bg: "from-rose-500 to-red-500",
      titleColor: "text-red-100",
    },
    {
      title: "Hosting & Deployment",
      description:
        "I take care of getting your site online using Webflow, Vercel, or Netlify. Fast, secure, and with everything set up the right way.",
      bg: "from-indigo-600 to-blue-500",
      titleColor: "text-indigo-100",
    },
  ];

  return (
    <section
      className="py-8 md:py-24 px-[5vw] bg-gradient-to-br from-[#0f0f0f] via-black to-[#0f0f0f] text-white"
      id="services"
    >
      <div className="container">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-cyan-400">
            My Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            I craft full-stack experiences that blend design, performance, and
            modern development practices.
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
              <h3
                className={`text-2xl font-semibold mb-3 ${service.titleColor}`}
              >
                {service.title}
              </h3>
              <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
