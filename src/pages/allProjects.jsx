import { useState } from "react";
import projectData from "../component/projectData"; // same array as used in WorkSample
import Header from "../component/header";
import Footer from "../component/footer";

const allProjects = () => {
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
    <>
      <Header />
      <div className="min-h-screen bg-black text-white px-6 md:px-24 py-24">
        <h1 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text">
          All Projects
        </h1>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-10">
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
        <div className="grid gap-12 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#111] rounded-2xl p-6 shadow-xl border border-gray-800 hover:shadow-cyan-500/20 transition"
            >
              <img
                src={project.imageUrl}
                alt={project.name}
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
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-green-600 px-4 py-2 rounded-full text-white text-sm"
                >
                  Live
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blue-600 px-4 py-2 rounded-full text-white text-sm"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default allProjects;
