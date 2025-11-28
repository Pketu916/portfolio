import { useState, useRef, useEffect } from "react";
import { FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import gsap from "gsap";

const Header = ({ isDark = true }) => {
  const menuRef = useRef(null);
  const logoPatelRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About Me", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", scrollId: "footer" }, // Scroll to #footer
  ];

  const handleNavClick = (item) => {
    closeMobileMenu();

    if (item.scrollId) {
      const el = document.getElementById(item.scrollId);
      if (el) {
        el.scrollIntoView();
      } else {
        navigate("/", { state: { scrollToId: item.scrollId } });
      }
    } else {
      navigate(item.path);
    }
  };

  const closeMobileMenu = () => {
    if (menuRef.current.classList.contains("translate-x-0")) {
      menuRef.current.classList.remove("translate-x-0");
      setMenuOpen(false);
    }
  };

  const handleMenuToggle = () => {
    const isOpen = menuRef.current.classList.contains("translate-x-0");
    menuRef.current.classList.toggle("translate-x-0");
    setMenuOpen(!isOpen);
  };

  // GSAP Logo Animation - Elegant Wave Effect
  useEffect(() => {
    if (!logoPatelRef.current) return;

    const element = logoPatelRef.current;
    const text = element.textContent;
    const letters = text.split("");

    // Wrap each letter in a span for individual animation with gradient
    element.innerHTML = letters
      .map(
        (letter, index) =>
          `<span class="logo-letter" style="display: inline-block; position: relative; background: linear-gradient(90deg, rgb(34, 211, 238), rgb(251, 146, 60), rgb(34, 211, 238)); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">${
            letter === " " ? "&nbsp;" : letter
          }</span>`
      )
      .join("");

    const letterElements = element.querySelectorAll(".logo-letter");

    // Create a smooth wave animation
    const waveTl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    letterElements.forEach((letter, index) => {
      gsap.set(letter, {
        y: 0,
        rotationX: 0,
      });

      // Subtle wave up animation
      waveTl.to(
        letter,
        {
          y: -6,
          rotationX: 10,
          duration: 0.4,
          ease: "power2.out",
        },
        index * 0.08
      );
    });

    // Wave down
    letterElements.forEach((letter, index) => {
      waveTl.to(
        letter,
        {
          y: 0,
          rotationX: 0,
          duration: 0.4,
          ease: "power2.in",
        },
        letters.length * 0.08 + index * 0.08
      );
    });

    // Smooth gradient animation on each letter
    letterElements.forEach((letter) => {
      gsap.to(letter, {
        backgroundPosition: "200% center",
        duration: 5,
        ease: "none",
        repeat: -1,
      });
    });
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 w-full z-50 backdrop-blur-md px-[5vw] py-5 ${
          isDark
            ? "bg-black/90 text-white"
            : "bg-white/90 text-gray-900 border-b border-gray-200"
        }`}
      >
        {/* Logo */}
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 cursor-pointer select-none group">
              <Link to="/" className="flex items-center gap-2">
                <span className="text-xl font-bold transition-all duration-300 group-hover:scale-105 group-hover:text-primary">
                  Ketu
                </span>
                <span className="text-primary font-bold relative">
                  <span
                    ref={logoPatelRef}
                    className="inline-block text-xl font-bold"
                    style={{
                      background:
                        "linear-gradient(90deg, rgb(34, 211, 238), rgb(251, 146, 60), rgb(34, 211, 238))",
                      backgroundSize: "200% auto",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Patel
                  </span>
                </span>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-8 text-sm uppercase">
              {navLinks.map((item) => {
                const isActive =
                  item.path === location.pathname ||
                  (item.scrollId &&
                    location.pathname === "/" &&
                    location.state?.scrollToId === item.scrollId);

                return (
                  <span
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    className={
                      item.name === "Projects"
                        ? `px-3 py-1.5 rounded-lg bg-gradient-to-r from-primary/15 via-primary/20 to-primary/15 text-primary font-medium cursor-pointer transition-all duration-300 hover:from-primary/25 hover:via-primary/30 hover:to-primary/25 hover:shadow-lg hover:shadow-primary/30 relative overflow-hidden group`
                        : `p-2 relative cursor-pointer transition-colors duration-300 ${
                            isDark ? "text-white" : "text-gray-900"
                          } hover:text-primary
         after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
         after:bg-primary after:transition-all after:duration-500 hover:after:w-full
         ${isActive ? "text-primary after:w-full" : ""}`
                    }
                  >
                    {item.name === "Projects" && (
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                    )}
                    {item.name}
                  </span>
                );
              })}
            </nav>

            {/* Social Icons */}
            <div className="hidden md:flex gap-3 text-gray-400 items-center">
              <a
                href="mailto:pketu916@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope className="cursor-pointer hover:text-primary transition" />
              </a>
              <a
                href="https://www.instagram.com/k2__patel_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="cursor-pointer hover:text-accent transition" />
              </a>
              <a
                href="https://www.linkedin.com/in/ketu-patel-b9a104232/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="cursor-pointer hover:text-primary transition" />
              </a>
            </div>

            {/* Mobile Menu Icon */}
            <div
              className="md:hidden w-8 h-8 relative cursor-pointer flex items-center justify-center"
              onClick={handleMenuToggle}
            >
              <div className="space-y-1.5">
                <div
                  className={`w-6 h-0.5 bg-white transform transition duration-300 ${
                    menuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></div>
                <div
                  className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></div>
                <div
                  className={`w-6 h-0.5 bg-white transform transition duration-300 ${
                    menuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 w-full h-screen z-40 flex flex-col justify-center items-center text-3xl gap-6 translate-x-full ${
          isDark ? "bg-black text-white" : "bg-white text-gray-900"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 text-lg uppercase">
          {navLinks.map((item) => {
            const isActive =
              item.path === location.pathname ||
              (item.scrollId &&
                location.pathname === "/" &&
                location.state?.scrollToId === item.scrollId);

            return (
              <span
                key={item.name}
                onClick={() => handleNavClick(item)}
                className={
                  item.name === "Projects"
                    ? `px-4 py-2 rounded-lg bg-gradient-to-r from-primary/15 via-primary/20 to-primary/15 text-primary font-medium cursor-pointer transition-all duration-300 hover:from-primary/25 hover:via-primary/30 hover:to-primary/25 hover:shadow-lg hover:shadow-primary/30 relative overflow-hidden group`
                    : `p-2 relative cursor-pointer transition-colors duration-300 text-white hover:text-cyan-400
         after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
         after:bg-cyan-400 after:transition-all after:duration-500 hover:after:w-full
         ${isActive ? "text-cyan-400 after:w-full" : ""}`
                }
              >
                {item.name === "Projects" && (
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                )}
                {item.name}
              </span>
            );
          })}
        </nav>

        {/* Mobile Social Icons */}
        <div className="flex gap-6 text-2xl mt-6 text-gray-400">
          <a
            href="mailto:contact@ketupatel.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="hover:text-white transition" />
          </a>
          <a
            href="https://www.instagram.com/k2__patel_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-white transition" />
          </a>
          <a
            href="https://www.linkedin.com/in/ketu-patel-b9a104232/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="hover:text-white transition" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
