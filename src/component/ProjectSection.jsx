import { useRef, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Doctor Appointment App",
    description: "Full-stack app for hospital appointments.",
    link: "https://github.com/Pketu916/Doctor-appoinment"
  },
  {
    title: "Real Estate Website",
    description: "Property listing with filters and galleries.",
    link: "https://github.com/Pketu916/frontend-practice"
  },
  {
    title: "Figma to Code",
    description: "Responsive UIs from Figma using React/Tailwind.",
    link: "https://samarth-e-mobility-xrx4.vercel.app/"
  }
];

const ProjectSection = () => {
  const scrollRef = useRef(null);
  const containerRef = useRef(null);
  const [touchStartY, setTouchStartY] = useState(0);

  // ✅ Handle vertical wheel scroll for horizontal scroll
  useEffect(() => {
    const el = scrollRef.current;
    const container = containerRef.current;

    const handleWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    const handleTouchStart = (e) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e) => {
      const deltaY = touchStartY - e.touches[0].clientY;
      el.scrollLeft += deltaY;
      setTouchStartY(e.touches[0].clientY);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchmove", handleTouchMove);

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
    };
  }, [touchStartY]);

  const scrollBy = (offset) => {
    scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <>
      {/* Main Scroll Container */}
      <section
        ref={containerRef}
        className="relative w-screen h-screen overflow-hidden bg-gray-100"
      >
        {/* Nav buttons */}
        <button
          onClick={() => scrollBy(-window.innerWidth)}
          className="absolute top-1/2 left-4 z-10 text-2xl p-2 bg-white rounded-full shadow hover:scale-110 transition"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => scrollBy(window.innerWidth)}
          className="absolute top-1/2 right-4 z-10 text-2xl p-2 bg-white rounded-full shadow hover:scale-110 transition"
        >
          <FaChevronRight />
        </button>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex h-screen overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth"
        >
          {projects.map((proj, i) => (
            <div key={i} className="snap-center flex-shrink-0 w-screen h-screen flex items-center justify-center">
              <ProjectCard {...proj} />
            </div>
          ))}

          {/* Exit slide */}
          <div className="snap-center flex-shrink-0 w-screen h-screen flex items-center justify-center">
            <div className="text-gray-600 text-xl">Scroll down for more ↓</div>
          </div>
        </div>
      </section>

    </>
  );
};

export default ProjectSection;
