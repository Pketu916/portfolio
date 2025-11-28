import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycby6OCiidUMNEexI5zQ8J0zPJ4WwiIEYy3oXhJxSKMa3cBNp0xPhCDD3kHR7MtIV_sqE/exec",
        {
          method: "POST",
          mode: "no-cors", // ✅ this is correct
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <footer
      id="footer"
      className="bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] text-white px-[5vw] py-8 md:py-16 backdrop-blur-sm relative overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle at 50% 50%, rgba(34, 211, 238, 0.1) 0%, transparent 50%)",
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Branding Section */}
          <div>
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary text-3xl md:text-5xl font-extrabold tracking-wide uppercase drop-shadow-lg animate-pulse mb-4">
              Ketu Patel
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Web designer & front-end developer focused on building modern,
              interactive, and performance-optimized user experiences using
              React.js, Tailwind CSS, and animation tools.
            </p>
            <p className="text-sm text-gray-400">
              📍 Based in Ahmedabad, India
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col flex-wrap md:content-center content-start">
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Quick Links
            </h3>
            <ul className="text-gray-300 space-y-3 text-lg">
              <li>
                <Link
                  to="/"
                  className="hover:text-primary transition-all duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="hover:text-primary transition-all duration-300"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary transition-all duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-primary transition-all duration-300"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Contact Me
            </h3>
            <p className="text-gray-300 mb-6">
              Fill out the form below to send me a message. I'll respond as soon
              as I can.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full bg-white/5 border border-white/10 focus:border-primary text-white placeholder-gray-400 px-4 py-3 rounded-lg outline-none transition-all"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full bg-white/5 border border-white/10 focus:border-primary text-white placeholder-gray-400 px-4 py-3 rounded-lg outline-none transition-all"
              />
              <textarea
                name="message"
                required
                placeholder="Your Message"
                className="w-full bg-white/5 border border-white/10 focus:border-primary text-white placeholder-gray-400 px-4 py-3 rounded-lg outline-none h-20 resize-none"
              ></textarea>

              <button
                type="submit"
                disabled={status === "sending"}
                className={`inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent 
                hover:from-primary-dark hover:to-accent-dark px-6 py-2 rounded-full text-white text-sm font-semibold 
                transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 border border-primary
                ${status === "sending" ? "opacity-50 cursor-not-allowed" : ""}`}
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

        {/* Bottom Footer */}
        <div className="mt-20 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex gap-6 text-gray-300 text-xl">
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
            <a href="mailto:pketu916@gmail.com">
              <FaEnvelope className="cursor-pointer hover:text-primary transition" />
            </a>
          </div>

          <p className="text-sm text-gray-400 text-center md:text-right">
            © {new Date().getFullYear()} Ketu Patel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
