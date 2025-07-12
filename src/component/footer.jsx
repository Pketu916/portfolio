import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";
import { gsap } from "gsap";

const Footer = () => {
  const iconsRef = useRef([]);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  useEffect(() => {
    const listeners = iconsRef.current.map((icon) => {
      if (!icon) return null;
      const enter = () =>
        gsap.to(icon, { scale: 1.3, color: "#00FFFF", duration: 0.3 });
      const leave = () =>
        gsap.to(icon, { scale: 1, color: "#AAAAAA", duration: 0.3 });

      icon.addEventListener("mouseenter", enter);
      icon.addEventListener("mouseleave", leave);
      return { icon, enter, leave };
    });

    return () => {
      listeners.forEach((l) => {
        if (l && l.icon) {
          l.icon.removeEventListener("mouseenter", l.enter);
          l.icon.removeEventListener("mouseleave", l.leave);
        }
      });
    };
  }, []);

  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigateAndScroll = (link) => {
    const sectionId = link.toLowerCase();
    if (link === "Projects") {
      if (location.pathname !== "/projects") {
        navigate("/projects");
      }
    } else {
      if (location.pathname !== "/") {
        navigate("/", { replace: false });
        setTimeout(() => scrollToSection(sectionId), 100); // delay to wait for DOM
      } else {
        scrollToSection(sectionId);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/mnnzaang", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: data,
    });

    if (response.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <footer
      id="footer"
      className="bg-gradient-to-t from-black via-[#0b0b0b] to-black text-white px-[5vw] py-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Branding Section */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ketu Patel
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Web designer & front-end developer focused on building modern,
              interactive, and performance-optimized user experiences using
              React.js, Tailwind CSS, and animation tools.
            </p>
            <p className="text-sm text-gray-500">
              📍 Based in Ahmedabad, India
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col flex-wrap content-center">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
              Quick Links
            </h3>
            <ul className="text-gray-300 space-y-3 text-lg">
              {["Home", "Projects", "Toolbox", "Experience", "Services"].map(
                (link) => (
                  <li key={link}>
                    <span
                      onClick={() => handleNavigateAndScroll(link)}
                      className="cursor-pointer hover:text-white transition-all duration-300"
                    >
                      {link}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
              Contact Me
            </h3>
            <p className="text-gray-400 mb-6">
              Fill out the form below to send me a message. I'll respond as soon
              as I can.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full bg-[#111] border border-gray-700 focus:border-cyan-500 text-white px-4 py-3 rounded-lg outline-none transition-all"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full bg-[#111] border border-gray-700 focus:border-cyan-500 text-white px-4 py-3 rounded-lg outline-none transition-all"
              />
              <textarea
                name="message"
                required
                placeholder="Your Message"
                className="w-full bg-[#111] border border-gray-700 focus:border-cyan-500 text-white px-4 py-3 rounded-lg outline-none transition-all h-20 resize-none"
              ></textarea>

              <button
                type="submit"
                disabled={status === "sending"}
                className={`inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 
                  hover:from-cyan-600 hover:to-blue-700 px-6 py-2 rounded-full text-white text-sm font-semibold 
                  transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 border border-cyan-400
                  ${
                    status === "sending" ? "opacity-50 cursor-not-allowed" : ""
                  }`}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
                <FaPaperPlane className="text-xs" />
              </button>

              {status === "success" && (
                <p className="text-green-400 text-sm mt-2">
                  ✅ Thank you! Message sent.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm mt-2">
                  ❌ Oops! Something went wrong.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-20 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Socials */}
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
          <a
            href="https://www.linkedin.com/in/ketu-patel-b9a104232/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn
              ref={(el) => (iconsRef.current[1] = el)}
              className="cursor-pointer hover:text-blue-500 transition"
            />
          </a>
          <a href="mailto:pketu916@gmail.com">
            <FaEnvelope className="cursor-pointer hover:text-cyan-500 transition" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 text-center md:text-right">
          © {new Date().getFullYear()} Ketu Patel. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
