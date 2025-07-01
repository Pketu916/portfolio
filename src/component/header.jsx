import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Header = () => {
  const logoRef = useRef(null);
  const patelRef = useRef(null);
  const socialsRef = useRef([]);
  const navLinksRef = useRef([]);
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const navItems = ["Home", "Projects", "Toolbox", "Services"];

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

  const scrollToSection = (id) => {
    const sectionId = id.toLowerCase() === "home" ? "hero" : id.toLowerCase();
    const section = document.getElementById(sectionId);

    if (section) {
      const offsetTop = section.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth", // Lenis overrides this for buttery smooth scroll
      });

      setActive(id);
      setMenuOpen(false);
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  };

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
    gsap.to(menuRef.current, {
      x: menuOpen ? "100%" : "0%",
      duration: 0.5,
      ease: "power2.inOut",
    });
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md text-white px-[5vw] py-4 flex justify-between items-center">
        {/* Logo */}
        <div ref={logoRef} className="flex items-center gap-2 cursor-pointer select-none">
          <a href="#hero" className="flex items-center gap-2">
            <span className="text-xl font-bold">Ketu</span>
            <span ref={patelRef} className="text-cyan-400 font-bold">Patel</span>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm uppercase">
          {navItems.map((text, i) => (
            <span
              key={i}
              ref={(el) => (navLinksRef.current[i] = el)}
              className={`relative cursor-pointer transition pb-1 ${
                active === text
                  ? "text-cyan-400 border-b-2 border-cyan-400"
                  : "text-gray-300 hover:text-cyan-300"
              }`}
              onClick={() => scrollToSection(text)}
            >
              {text}
            </span>
          ))}
        </nav>

        {/* Socials */}
        <div className="hidden md:flex gap-3 text-gray-400 items-center">
          <a href="mailto:contact@ketupatel.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/k2__patel_/" target="_blank" rel="noopener noreferrer">
            <FaInstagram ref={(el) => (socialsRef.current[0] = el)} className="cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/in/ketu-patel-b9a104232/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn ref={(el) => (socialsRef.current[1] = el)} className="cursor-pointer" />
          </a>
        </div>

        {/* Mobile Icon */}
        <div
          className="md:hidden w-8 h-8 relative cursor-pointer flex items-center justify-center"
          onClick={handleMenuToggle}
        >
          <svg className="w-6 h-6 stroke-white" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line
              x1="3"
              y1="6"
              x2="21"
              y2="6"
              className="transition-transform origin-center"
              style={{
                transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "rotate(0) translate(0, 0)",
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
                transform: menuOpen ? "rotate(-45deg) translate(0px, 0px)" : "rotate(0) translate(0, 0)",
                transition: "transform 0.3s ease",
              }}
            />
          </svg>
        </div>
      </header>

      {/* Full Screen Mobile Menu */}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 w-full h-screen bg-black text-white z-40 flex flex-col justify-center items-center text-3xl gap-10 translate-x-full"
      >
        {navItems.map((item, i) => (
          <span
            key={i}
            className={`hover:scale-110 active:scale-95 transition-transform duration-300 cursor-pointer ${
              active === item ? "text-cyan-400" : "text-white"
            }`}
            onClick={() => scrollToSection(item)}
          >
            {item}
          </span>
        ))}
        <div className="flex gap-6 text-2xl mt-6">
          <a href="mailto:contact@ketupatel.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="cursor-pointer text-gray-400 hover:text-white" />
          </a>
          <a href="https://www.instagram.com/k2__patel_/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="cursor-pointer text-gray-400 hover:text-white" />
          </a>
          <a href="https://www.linkedin.com/in/ketu-patel-b9a104232/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="cursor-pointer text-gray-400 hover:text-white" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
