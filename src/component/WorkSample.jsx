import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import WorkSampleImg from "../assets/AoVi0HG0bEq.png";
import WorkSample1 from "../assets/AoVi0HG0bEq (1).png";
import WorkSample2 from "../assets/AoVi0HG0bEq (2).png";
import WorkSample3 from "../assets/AoVi0HG0bEq (3).png";
import WorkSample4 from "../assets/AoVi0HG0bEq (5).png";

gsap.registerPlugin(ScrollTrigger);

const projectData = [
  {
    id: "1",
    name: "Coza Store",
    description:
      "Modern eCommerce website with interactive product slider, responsive design, and clean UI using HTML, CSS, and Swiper.js.",
    technologies: ["HTML", "CSS", "Swiper.js"],
    github: "https://github.com/Pketu916/appsRow/tree/main/everX",
    liveDemo: "https://apps-row-8dqs.vercel.app/",
    imageUrl: WorkSample4,
  },
  {
    id: "2",
    name: "Ever X",
    description:
      "Full-stack appointment booking system with secure authentication, patient management, responsive dashboard, and RESTful API using MERN stack.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Pketu916/appsRow/tree/main/everX",
    liveDemo: "https://everx.vercel.app/",
    imageUrl: WorkSampleImg,
  },
  {
    id: "3",
    name: "Nestora",
    description:
      "Modern fashion landing page with responsive design, animated sections, smooth scroll, and clean layout using Tailwind CSS.",
    technologies: ["HTML", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/Pketu916/appsRow/tree/main/nestora",
    liveDemo: "https://nestora-three.vercel.app/",
    imageUrl: WorkSample1,
  },
  {
    id: "4",
    name: "Samarth E-Mobility",
    description:
      "Next-gen EV company website with animated hero sections, Framer Motion effects, and fully responsive design.",
    technologies: ["React.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    github: "https://github.com/Pketu916/samarth-e-mobility",
    liveDemo: "https://samarth-e-mobility-xrx4.vercel.app//",
    imageUrl: WorkSample2,
  },
  {
    id: "5",
    name: "Dashify",
    description:
      "SaaS dashboard UI with React, reusable components, animated transitions, and a clean, responsive layout.",
    technologies: ["React.js", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/Pketu916/appsRow/tree/main/dashify",
    liveDemo: "https://apps-row-ioxu.vercel.app//",
    imageUrl: WorkSample3,
  },
];

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
          duration: 1.3,
          ease: "expo.out",
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        text,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
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
          duration: 0.5,
          ease: "power2.out",
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
    <div
      id="projects"
      ref={containerRef}
      className="bg-gradient-to-b from-black via-[#0d0d0d] to-black text-white px-6 md:px-24 py-24"
    >
      <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-20 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
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
            className="w-full md:w-1/2 rounded-3xl shadow-2xl border-4 border-gray-700 hover:scale-105 transition-transform duration-500"
          />

          <div className="text-content md:w-1/2 sticky top-24 self-start">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              {project.name}
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
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
  );
};

export default WorkSample;
