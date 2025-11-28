import { useState } from "react";
import projectData from "../component/projectData"; // same array as used in WorkSample
import PageLayout from "../component/PageLayout";
import HeroSection from "../component/HeroSection";
import Marquee from "../component/Marquee";

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

  return (
    <PageLayout isDark={true}>
      <HeroSection
        title="My Projects"
        subtitle="Explore my portfolio of web applications, showcasing modern technologies and creative solutions."
        isDark={true}
        height="60vh"
      />
      <section className="min-h-screen bg-gradient-to-br from-[#111] via-[#0f0f0f] to-[#111] text-white py-24 px-6 md:px-24 relative overflow-hidden">
        <div className="container  ">
          {/* Filter buttons */}
          <div className="flex flex-wrap gap-2 md:gap-3 justify-center mb-10">
            {technologies.map((tech, idx) => (
              <button
                key={idx}
                onClick={() => setFilter(tech)}
                className={`px-4 py-2 rounded-full border text-sm transition-colors ${
                  filter === tech
                    ? "bg-primary text-white border-primary"
                    : "text-primary border-primary/50 hover:bg-primary/20 bg-white/5 backdrop-blur-sm"
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
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-primary/20 hover:border-primary/30 transition"
              >
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  loading="lazy"
                  className="w-full rounded-xl mb-4"
                />
                <h2 className="text-2xl font-bold text-primary mb-2">
                  {project.name}
                </h2>
                <p
                  className="text-gray-300 mb-4"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 border border-primary/50 rounded-full text-primary bg-primary/10"
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
                      className="bg-accent px-4 py-2 rounded-full text-white text-sm hover:bg-accent-dark transition"
                    >
                      Live
                    </a>
                  ) : (
                    <span className="bg-gray-800/50 text-gray-400 px-4 py-2 rounded-full text-sm cursor-not-allowed border border-gray-700">
                      No Live Demo
                    </span>
                  )}

                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-primary px-4 py-2 rounded-full text-white text-sm hover:bg-primary-dark transition"
                    >
                      GitHub
                    </a>
                  ) : (
                    <span className="bg-gray-800/50 text-gray-400 px-4 py-2 rounded-full text-sm cursor-not-allowed border border-gray-700">
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
    </PageLayout>
  );
};

export default AllProjects;
