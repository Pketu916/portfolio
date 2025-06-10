const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="min-w-[70vw] sm:min-w-[40vw] max-w-[85vw] bg-white rounded-xl shadow-md p-6 mx-4 transition-transform hover:scale-105">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 text-sm mb-3">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline text-sm"
        >
          View Project →
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
