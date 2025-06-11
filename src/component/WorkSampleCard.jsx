import React from 'react';

const WorkSampleCard = ({ project }) => {
  return (
    <div className="work-sample-card">
      <div className="overlay"></div> {/* Overlay to improve text visibility */}
      <div className="card-content">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <p><strong>Technologies:</strong> {project.technologies.join(", ")}</p>
        <div className="work-sample-links">
          <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          {project.liveDemo && (
            Array.isArray(project.liveDemo)
              ? project.liveDemo.map((demo, index) => (
                  <a key={index} href={demo} target="_blank" rel="noopener noreferrer">Live Demo {index + 1}</a>
                ))
              : <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>
          )}
          {project.sourceCode && <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">Source Code</a>}
        </div>
      </div>
    </div>
  );
};

export default WorkSampleCard;
