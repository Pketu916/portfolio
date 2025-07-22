import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import experienceData from "../../experienceData.js"; // Adjust path accordingly

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".exp-card");

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power4.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative w-full bg-black text-white  px-[5vw] py-8 md:py-24"
    >
      <div className="container">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-cyan-400 gap-8 mb-8 md:mb-16 text-center">
            My Experience
          </h2>

          <div className="w-full max-w-5xl flex flex-col gap-16">
            {experienceData.map((exp, index) => (
              <div
                key={index}
                className="exp-card bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 p-6 rounded-xl shadow-lg border border-white/10 backdrop-blur-md transform transition-all hover:scale-105 hover:shadow-cyan-500/30 hover:border-cyan-400/50 group"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                  {exp.company}
                </h3>
                <p className="text-gray-400 mb-4">
                  {exp.role} | {exp.duration}
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {exp.responsibilities.map((item, i) => (
                    <li
                      key={i}
                      className="group-hover:text-white transition-colors"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
