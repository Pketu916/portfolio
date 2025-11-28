import React from "react";
import experienceData from "../../experienceData.js"; // Adjust path accordingly

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative w-full bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] text-white px-[5vw] py-8 md:py-24 backdrop-blur-sm overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle at 50% 50%, rgba(34, 211, 238, 0.1) 0%, transparent 50%)",
      }}
    >
      <div className="container">
        <div className="flex flex-col items-center">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary text-3xl md:text-5xl font-extrabold tracking-wide uppercase drop-shadow-lg animate-pulse gap-8 mb-8 md:mb-16 text-center">
            My Experience
          </h2>

          <div className="w-full max-w-5xl flex flex-col gap-16">
            {experienceData.map((exp, index) => (
              <div
                key={index}
                className="exp-card bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-6 rounded-xl shadow-lg border border-white/10 backdrop-blur-md transform transition-all hover:scale-105 hover:shadow-primary/30 hover:border-primary/50 group"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  {exp.company}
                </h3>
                <p className="text-gray-300 mb-4">
                  {exp.role} | {exp.duration}
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
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
