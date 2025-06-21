import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Header = () => {
  const logoRef = useRef(null);
  const patelRef = useRef(null);
  const socialsRef = useRef([]);
  const navLinksRef = useRef([]);
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Logo text pulse
    gsap.to(logoRef.current, {
      scale: 1.05,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "sine.inOut",
    });

    // 3D animated rounded text for 'Patel'
    gsap.to(patelRef.current, {
      rotateY: 360,
      borderRadius: "50%",
      duration: 3,
      repeat: -1,
      ease: "power1.inOut",
      transformOrigin: "center",
    });

    // Socials hover
    socialsRef.current.forEach((icon) => {
      const enter = () => gsap.to(icon, { scale: 1.3, color: "#00FFFF", duration: 0.3 });
      const leave = () => gsap.to(icon, { scale: 1, color: "#AAAAAA", duration: 0.3 });
      icon.addEventListener("mouseenter", enter);
      icon.addEventListener("mouseleave", leave);
    });
  }, []);

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
          <span className="text-xl font-bold">Ketu</span>
          <span ref={patelRef} className="text-cyan-400 font-bold">Patel</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm uppercase">
          {["About", "Projects", "Message", "Events"].map((text, i) => (
            <span
              key={i}
              ref={(el) => (navLinksRef.current[i] = el)}
              className="hover:text-cyan-400 relative cursor-pointer transition"
            >
              {text}
              <span className="block w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </span>
          ))}
        </nav>

        {/* Socials and Email Desktop */}
        <div className="hidden md:flex gap-3 text-gray-400 items-center">
          <a href="mailto:contact@ketupatel.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="cursor-pointer" />
          </a>
          <FaInstagram ref={(el) => (socialsRef.current[0] = el)} className="cursor-pointer" />
          <FaFacebookF ref={(el) => (socialsRef.current[1] = el)} className="cursor-pointer" />
          <FaLinkedinIn ref={(el) => (socialsRef.current[2] = el)} className="cursor-pointer" />
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={handleMenuToggle}>
          {menuOpen ? "✕" : "☰"}
        </div>
      </header>

      {/* Full Screen Menu */}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 w-full h-screen bg-black text-white z-40 flex flex-col justify-center items-center text-3xl gap-10 translate-x-full"
      >
        {["About", "Projects", "Message", "Events"].map((item, i) => (
          <span
            key={i}
            className="hover:scale-110 active:scale-95 transition-transform duration-300 cursor-pointer"
          >
            {item}
          </span>
        ))}
        <div className="flex gap-6 text-2xl mt-6">
          <a href="mailto:contact@ketupatel.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="cursor-pointer text-gray-400 hover:text-white" />
          </a>
          <FaInstagram className="cursor-pointer text-gray-400 hover:text-white" />
          <FaFacebookF className="cursor-pointer text-gray-400 hover:text-white" />
          <FaLinkedinIn className="cursor-pointer text-gray-400 hover:text-white" />
        </div>
      </div>
    </>
  );
};

export default Header;