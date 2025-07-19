import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import NavLinks from "./navLinks";
import lenis from "../hooks/lenis"; // adjust this path based on your project

const Header = ({ isHome }) => {
  const logoRef = useRef(null);
  const patelRef = useRef(null);
  const socialsRef = useRef([]);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const allNavItems = [
    { name: "Home", id: "hero", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Toolbox", id: "toolbox", path: "/" },
    { name: "Experience", id: "experience", path: "/" },
    { name: "Services", id: "services", path: "/" },
    { name: "Contact", id: "footer", path: "/" },
  ];

  const navItems = isHome
    ? allNavItems
    : allNavItems.filter((item) =>
        ["Home", "Projects", "Contact"].includes(item.name)
      );

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

  const handleNavClick = (item) => {
    closeMobileMenu(); // always close if open

    if (isHome && item.id) {
      const el = document.getElementById(item.id);
      if (el) lenis.scrollTo(el);
    } else if (item.id === "footer") {
      navigate("/", { state: { scrollToId: "footer" } });
    } else {
      navigate(item.path);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md text-white px-[5vw] py-4 flex justify-between items-center">
        {/* Logo */}
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
          <NavLinks
            isHome={isHome}
            navItems={navItems}
            handleNavClick={handleNavClick}
          />
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex gap-3 text-gray-400 items-center">
          <a href="mailto:contact@ketupatel.com" target="_blank">
            <FaEnvelope className="cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/k2__patel_/" target="_blank">
            <FaInstagram
              ref={(el) => (socialsRef.current[0] = el)}
              className="cursor-pointer"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/ketu-patel-b9a104232/"
            target="_blank"
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
          <svg
            className="w-6 h-6 stroke-white"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line
              x1="3"
              y1="6"
              x2="21"
              y2="6"
              className="transition-transform origin-center"
              style={{
                transform: menuOpen
                  ? "rotate(45deg) translate(0px, 6px)"
                  : "rotate(0) translate(0, 0)",
                transition: "transform 0.3s ease",
              }}
            />
            <line
              x1="3"
              y1="12"
              x2="21"
              y2="12"
              className="transition-opacity"
              style={{
                opacity: menuOpen ? 0 : 1,
                transition: "opacity 0.3s ease",
              }}
            />
            <line
              x1="3"
              y1="18"
              x2="21"
              y2="18"
              className="transition-transform origin-center"
              style={{
                transform: menuOpen
                  ? "rotate(-45deg) translate(0px, -6px)"
                  : "rotate(0) translate(0, 0)",
                transition: "transform 0.3s ease",
              }}
            />
          </svg>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 w-full h-screen bg-black text-white z-20 flex flex-col justify-center items-center text-3xl gap-6 translate-x-full"
      >
        <nav className="flex flex-col items-center gap-6 text-lg uppercase">
          <NavLinks
            isHome={isHome}
            navItems={navItems}
            handleNavClick={handleNavClick}
          />
        </nav>

        {/* Mobile Social Icons */}
        <div className="flex gap-6 text-2xl mt-6">
          <a href="mailto:contact@ketupatel.com" target="_blank">
            <FaEnvelope className="cursor-pointer text-gray-400 hover:text-white" />
          </a>
          <a href="https://www.instagram.com/k2__patel_/" target="_blank">
            <FaInstagram className="cursor-pointer text-gray-400 hover:text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/ketu-patel-b9a104232/"
            target="_blank"
          >
            <FaLinkedinIn className="cursor-pointer text-gray-400 hover:text-white" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
