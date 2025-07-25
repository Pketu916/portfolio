import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import projectData from "./projectData";

gsap.registerPlugin(ScrollTrigger);

const WorkSample = () => {
  const containerRef = useRef();
  const visibleProjects = projectData.slice(0, 2); // show first 2 projects

  useEffect(() => {
    const sections = gsap.utils.toArray(".project-block");

    sections.forEach((section) => {
      const image = section.querySelector("img");
      const text = section.querySelector(".text-content");
      const tech = section.querySelectorAll(".text-content span");

      gsap.fromTo(
        image,
        { opacity: 0, y: 100, scale: 1.1 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        text,
        { opacity: 0, y: 120 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        tech,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.3,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="bg-gradient-to-b from-black via-[#0d0d0d] to-black text-white px-6 md:px-24 py-8 md:py-24"
    >
      <div className="container">
        <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-20 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
          🚀 Crazy Work Showcase
        </h1>

        {visibleProjects.map((project, idx) => (
          <section
            key={project.id}
            className={`project-block mb-32 relative flex flex-col md:flex-row gap-12 items-center ${
              idx % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <img
              src={project.imageUrl}
              alt={project.name}
              className="w-full md:w-1/2 rounded-3xl shadow-2xl border-0 border-gray-700 hover:scale-105 transition-transform duration-500"
            />

            <div className="text-content md:w-1/2 sticky top-24 self-start">
              <h2 className="text-2xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                {project.name}
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-800 text-sm px-4 py-2 rounded-full font-medium text-teal-300 border border-teal-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 px-6 py-2 rounded-full font-bold text-white"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 px-6 py-2 rounded-full font-bold text-white"
                >
                  GitHub
                </a>
              </div>
            </div>
          </section>
        ))}

        <div className="text-center mt-10">
          <Link
            to="/projects"
            className="inline-block px-8 py-3 text-white font-semibold bg-gradient-to-r from-purple-500 to-pink-600 rounded-full hover:scale-105 transition"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkSample;
