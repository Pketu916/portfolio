import { Link, useLocation } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

const Header2 = () => {
  const location = useLocation();
  const currentPage = location.pathname === "/" ? "Home" : location.pathname.replace("/", "");

  return (
    <header className="w-full bg-black sticky top-0 backdrop-blur-sm text-white px-[5vw] py-4 flex flex-col md:flex-row justify-between items-center z-50 shadow-md">
      {/* Left - Logo and Breadcrumb */}
      <div className="flex items-center gap-4 mb-2 md:mb-0">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold flex items-center gap-1">
          <span>Ketu</span>
          <span className="text-cyan-400">Patel</span>
        </Link>

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-300 ml-4">
          <Link to="/" className="hover:text-cyan-400 transition">Home</Link>
          <FiChevronRight className="text-gray-500" />
          <span className="capitalize text-white font-medium">{currentPage || "Home"}</span>
        </div>
      </div>

      {/* Right - Social Icons */}
      <div className="flex gap-4 text-lg text-gray-400">
        <a
          href="mailto:contact@ketupatel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.instagram.com/k2__patel_/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/ketu-patel-b9a104232/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </header>
  );
};

export default Header2;
