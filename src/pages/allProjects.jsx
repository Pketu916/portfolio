import { useState, useRef, useEffect } from "react";
import projectData from "../component/projectData"; // same array as used in WorkSample
import Header from "../component/header";
import Footer from "../component/footer";
import CustomCursor from "../component/CustomCursor";
import Marquee from "../component/Marquee";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const AllProjects = () => {
  const [filter, setFilter] = useState("All");

  const technologies = [
    "All",
    ...new Set(projectData.flatMap((p) => p.technologies)),
  ];

  const filteredProjects =
    filter === "All"
      ? projectData
      : projectData.filter((p) => p.technologies.includes(filter));

  const projectCardRef = useRef([]);
  projectCardRef.current = [];

  useEffect(() => {
    // Clear previous ScrollTriggers
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    projectCardRef.current.forEach((card, index) => {
      if (!card) return;

      const image = card.querySelector("img");

      // Parallax effect on image
      if (image) {
        gsap.to(image, {
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "bottom 30%",
            scrub: true,
          },
        });
      }

      // Slight float effect on card
      gsap.to(card, {
        y: 10,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          end: "bottom 30%",
          scrub: true,
        },
      });

      // Entry animation
      gsap.fromTo(
        card,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Refresh trigger positions
    ScrollTrigger.refresh();

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [filteredProjects]);

  return (
    <>
      <Header />
      <section className="min-h-screen bg-black text-white py-24 px-6 md:px-24">
        <div className="container  ">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text">
            All Projects
          </h1>

          {/* Filter buttons */}
          <div className="flex flex-wrap gap-2 md:gap-3 justify-center mb-10">
            {technologies.map((tech, idx) => (
              <button
                key={idx}
                onClick={() => setFilter(tech)}
                className={`px-4 py-2 rounded-full border text-sm ${
                  filter === tech
                    ? "bg-cyan-500 text-white"
                    : "text-cyan-300 border-cyan-600 hover:bg-cyan-800"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                className="bg-[#111] rounded-2xl p-6 shadow-xl border border-gray-800 hover:shadow-cyan-500/20 transition"
                ref={(el) => (projectCardRef.current[idx] = el)}
              >
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  loading="lazy"
                  className="w-full rounded-xl mb-4"
                />
                <h2 className="text-2xl font-bold text-teal-400 mb-2">
                  {project.name}
                </h2>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 border border-cyan-600 rounded-full text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.liveDemo ? (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-green-600 px-4 py-2 rounded-full text-white text-sm hover:bg-green-700 transition"
                    >
                      Live
                    </a>
                  ) : (
                    <span className="bg-gray-800 text-gray-500 px-4 py-2 rounded-full text-sm cursor-not-allowed">
                      No Live Demo
                    </span>
                  )}

                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-blue-600 px-4 py-2 rounded-full text-white text-sm hover:bg-blue-700 transition"
                    >
                      GitHub
                    </a>
                  ) : (
                    <span className="bg-gray-800 text-gray-500 px-4 py-2 rounded-full text-sm cursor-not-allowed">
                      No GitHub
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Marquee />
      <Footer />
      <CustomCursor />
    </>
  );
};

export default AllProjects;
