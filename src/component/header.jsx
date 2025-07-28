import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import lenis from "../hooks/lenis";

const Header = () => {
  const logoRef = useRef(null);
  const patelRef = useRef(null);
  const socialsRef = useRef([]);
  const menuRef = useRef(null);
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
      if (el) lenis.scrollTo(el);
      else navigate("/", { state: { scrollToId: item.scrollId } });
    } else {
      navigate(item.path);
    }
  };

  const closeMobileMenu = () => {
    if (menuRef.current.classList.contains("translate-x-0")) {
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power2.inOut",
      });
      menuRef.current.classList.remove("translate-x-0");
      setMenuOpen(false);
    }
  };

  const handleMenuToggle = () => {
    const isOpen = menuRef.current.classList.contains("translate-x-0");

    gsap.to(menuRef.current, {
      x: isOpen ? "100%" : "0%",
      duration: 0.5,
      ease: "power2.inOut",
    });

    menuRef.current.classList.toggle("translate-x-0");
    setMenuOpen(!isOpen);
  };

  useEffect(() => {
    gsap.to(logoRef.current, {
      scale: 1.05,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "sine.inOut",
    });

    gsap.to(patelRef.current, {
      rotateY: 360,
      borderRadius: "50%",
      duration: 3,
      repeat: -1,
      ease: "power1.inOut",
      transformOrigin: "center",
    });

    socialsRef.current.forEach((icon) => {
      const enter = () =>
        gsap.to(icon, { scale: 1.3, color: "#00FFFF", duration: 0.3 });
      const leave = () =>
        gsap.to(icon, { scale: 1, color: "#AAAAAA", duration: 0.3 });
      icon?.addEventListener("mouseenter", enter);
      icon?.addEventListener("mouseleave", leave);
    });
  }, []);

  return (
    <>
      <header
        className="sticky top-0 w-full z-50 bg-black/90 backdrop-blur-md text-white px-[5vw] py-5 "
      >
        {/* Logo */}
        <div className="container">
          <div className="flex justify-between items-center">
            <div
              ref={logoRef}
              className="flex items-center gap-2 cursor-pointer select-none"
            >
              <Link to="/" className="flex items-center gap-2">
                <span className="text-xl font-bold">Ketu</span>
                <span ref={patelRef} className="text-cyan-400 font-bold">
                  Patel
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
                    className={`relative cursor-pointer transition-colors duration-300 text-white hover:text-cyan-400
  after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:h-[2px] after:w-0 
  after:bg-cyan-400 after:transition-all after:duration-500 hover:after:w-full
  ${isActive ? "text-cyan-400 after:w-full" : ""}`}
                  >
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
                <FaEnvelope
                  ref={(el) => (socialsRef.current[2] = el)}
                  className="cursor-pointer"
                />
              </a>
              <a
                href="https://www.instagram.com/k2__patel_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  ref={(el) => (socialsRef.current[0] = el)}
                  className="cursor-pointer"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/ketu-patel-b9a104232/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn
                  ref={(el) => (socialsRef.current[1] = el)}
                  className="cursor-pointer"
                />
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
        className="fixed top-0 right-0 w-full h-screen bg-black text-white z-40 flex flex-col justify-center items-center text-3xl gap-6 translate-x-full"
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
                className={`relative cursor-pointer transition-colors duration-300 text-white hover:text-cyan-400
  after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
  after:bg-cyan-400 after:transition-all after:duration-500 hover:after:w-full
  ${isActive ? "text-cyan-400 after:w-full" : ""}`}
              >
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
