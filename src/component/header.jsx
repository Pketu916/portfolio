import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export const Header = () => {
  const logoRef = useRef(null);
  const ketuRef = useRef(null);
  const patelRef = useRef(null);
  const iconsRef = useRef([]);

  useEffect(() => {
    // Pulse animation on whole logo
    gsap.to(logoRef.current, {
      scale: 1.05,
      duration: 1.5,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Hover effects on logo
    const logoEl = logoRef.current;
    const handleLogoEnter = () => {
      gsap.to(logoEl, { scale: 1.2, color: "#00FFFF", duration: 0.3 });
    };
    const handleLogoLeave = () => {
      gsap.to(logoEl, { scale: 1.05, color: "#FFFFFF", duration: 0.3 });
    };
    logoEl.addEventListener("mouseenter", handleLogoEnter);
    logoEl.addEventListener("mouseleave", handleLogoLeave);

    // Ketu text animation
    gsap.to(ketuRef.current, {
      opacity: 0.6,
      scale: 1.05,
      yoyo: true,
      repeat: -1,
      duration: 1.5,
      ease: "power1.inOut",
    });

    // Patel flip animation
    gsap.to(patelRef.current, {
      rotateX: 360,
      repeat: -1,
      duration: 3,
      ease: "power2.inOut",
      transformOrigin: "center",
    });

    // Social icon hover animations
    const listeners = iconsRef.current.map((icon) => {
      if (!icon) return null;
      const handleEnter = () =>
        gsap.to(icon, {
          scale: 1.3,
          color: "#00FFFF",
          duration: 0.3,
          ease: "power2.out",
        });
      const handleLeave = () =>
        gsap.to(icon, {
          scale: 1,
          color: "#AAAAAA",
          duration: 0.3,
          ease: "power2.inOut",
        });

      icon.addEventListener("mouseenter", handleEnter);
      icon.addEventListener("mouseleave", handleLeave);

      return { icon, handleEnter, handleLeave };
    });

    // Cleanup all listeners
    return () => {
      logoEl.removeEventListener("mouseenter", handleLogoEnter);
      logoEl.removeEventListener("mouseleave", handleLogoLeave);

      listeners.forEach((l) => {
        if (l && l.icon) {
          l.icon.removeEventListener("mouseenter", l.handleEnter);
          l.icon.removeEventListener("mouseleave", l.handleLeave);
        }
      });
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-[3vw] py-[2vw] bg-black bg-opacity-70 backdrop-blur-md text-white">
      {/* Logo */}
      <h1
        ref={logoRef}
        className="text-xl font-bold cursor-pointer transition-all flex gap-1"
      >
        <span ref={ketuRef} className="text-white">
          Ketu
        </span>
        <span ref={patelRef} className="text-gray-400">
          Patel
        </span>
      </h1>

      {/* Socials */}
      <div className="flex items-center gap-3 text-sm text-gray-300">
        <span className="text-red-500 text-xs">●</span>
        <span>Socials</span>
        <span>/</span>
        <FaInstagram
          ref={(el) => (iconsRef.current[0] = el)}
          className="cursor-pointer"
        />
        <span>/</span>
        <FaFacebookF
          ref={(el) => (iconsRef.current[1] = el)}
          className="cursor-pointer"
        />
        <span>/</span>
        <FaLinkedinIn
          ref={(el) => (iconsRef.current[2] = el)}
          className="cursor-pointer"
        />
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="flex gap-5 text-sm text-gray-300">
          <li className="hover:text-white cursor-pointer">About</li>
          <li className="hover:text-white cursor-pointer">Projects</li>
          <li className="hover:text-white cursor-pointer">Message for Society</li>
          <li className="hover:text-white cursor-pointer">Events</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
