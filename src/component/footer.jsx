import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const iconsRef = useRef([]);

  useEffect(() => {
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

    return () => {
      listeners.forEach((l) => {
        if (l && l.icon) {
          l.icon.removeEventListener("mouseenter", l.handleEnter);
          l.icon.removeEventListener("mouseleave", l.handleLeave);
        }
      });
    };
  }, []);

  return (
    <footer className="bg-black text-white py-16 px-[5vw] ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Branding */}
        <div>
          <h2 className="text-4xl font-bold mb-4">Ketu Patel</h2>
          <p className="text-gray-400">
            Crafting responsive and animated web experiences that are functional
            and visually engaging.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
          <ul className="text-gray-300 space-y-2">
            <li>
              <a
                href="#hero"
                id="home-link"
                className="hover:text-white transition-all cursor-pointer"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#projects"
                id="projects-link"
                className="hover:text-white transition-all cursor-pointer"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#toolbox"
                id="toolbox-link"
                className="hover:text-white transition-all cursor-pointer"
              >
                Toolbox
              </a>
            </li>
             <li>
              <a
                href="#experience"
                id="#experience"
                className="hover:text-white transition-all cursor-pointer"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#services"
                id="services-link"
                className="hover:text-white transition-all cursor-pointer"
              >
                Services
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Me */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Contact Me</h3>
          <p className="text-gray-400 mb-4">
            I'd love to hear from you. Feel free to reach out via email!
          </p>
          <a
            href="mailto:pketu916@gmail.com?subject=Contact from Website"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-6 py-2 rounded-full font-bold text-white transition-all"
          >
            Email Me
          </a>
        </div>
      </div>

      {/* Social Icons and Copyright */}
      <div className="mt-14 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex gap-6 text-gray-400 text-xl">
          <a
            href="https://www.instagram.com/k2__patel_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              ref={(el) => (iconsRef.current[0] = el)}
              className="cursor-pointer hover:text-pink-500 transition"
            />
          </a>

          {/* <FaFacebookF
    ref={(el) => (iconsRef.current[1] = el)}
    className="cursor-pointer"
  /> */}

          <a
            href="https://www.linkedin.com/in/ketu-patel-b9a104232/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn
              ref={(el) => (iconsRef.current[2] = el)}
              className="cursor-pointer hover:text-blue-500 transition"
            />
          </a>

          <a href="mailto:pketu916@gmail.com">
            <FaEnvelope className="cursor-pointer hover:text-cyan-500 transition" />
          </a>
        </div>

        <p className="text-sm text-gray-500 text-center md:text-right">
          © {new Date().getFullYear()} Ketu Patel. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
