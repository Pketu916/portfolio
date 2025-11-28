import React from "react";

const Benefits = () => {
  const benefits = [
    {
      title: "Fast Performance",
      description:
        "Optimized code and lazy loading to ensure fast load times and responsiveness.",
    },
    {
      title: "Mobile First",
      description:
        "Designed with mobile-first approach to look great on every screen size.",
    },
    {
      title: "Smooth Animations",
      description:
        "Engaging user interactions using modern animation tools like GSAP.",
    },
    {
      title: "SEO Friendly",
      description:
        "Structured content with proper tags to boost your discoverability.",
    },
    {
      title: "Clean, Scalable Code",
      description:
        "Built with reusable components and clean architecture for easy maintenance and future scaling.",
    },
    {
      title: "Modern Tech Stack",
      description:
        "Utilizing latest technologies like React.js, Tailwind, Framer Motion, and optimized backend solutions.",
    },
  ];

  return (
    <section
      className="relative bg-gradient-to-br from-[#111] via-[#1a1a1a] to-[#111] text-white py-8 md:py-24 px-[5vw] overflow-hidden backdrop-blur-sm"
      id="benefits"
      style={{
        backgroundImage:
          "radial-gradient(circle at 50% 20%, rgba(249, 115, 22, 0.08) 0%, transparent 50%)",
      }}
    >
      <div className="container">
        {/* Title */}
        <div className="text-center mb-8 md:mb-16 relative z-10">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary text-3xl md:text-5xl font-extrabold tracking-wide uppercase drop-shadow-lg animate-pulse">
            Why Choose Me?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4">
            Explore the key benefits that make my development approach
            efficient, innovative, and future-proof.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="backdrop-blur-sm bg-white/5 border border-white/10 hover:border-primary/50 rounded-2xl p-6 shadow-lg hover:shadow-primary/20 transition-all duration-300 group cursor-pointer"
            >
              <h3 className="text-xl font-bold mb-3 text-primary">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Wavy SVG */}
        {/* <svg
        className="absolute bottom-0 left-0 w-full h-32 md:h-48 text-black translate-y-1"
        preserveAspectRatio="none"
        viewBox="0 0 1440 320"
      >
        <path
          fill="currentColor"
          d="M0,224L80,229.3C160,235,320,245,480,234.7C640,224,800,192,960,181.3C1120,171,1280,181,1360,186.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg> */}
      </div>
    </section>
  );
};

export default Benefits;
