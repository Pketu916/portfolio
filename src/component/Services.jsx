import React from "react";

const Services = () => {
  const services = [
    {
      title: "Full Stack Web Applications",
      description:
        "I build full websites and apps using tools like React, Next.js, and Node.js. Whether it's a simple dashboard or a full product, I handle both front and back end.",
      bg: "from-yellow-400 to-orange-500",
      titleColor: "text-yellow-100",
    },
    {
      title: "Webflow Development",
      description:
        "I create clean, fast, and mobile-friendly websites using Webflow. From landing pages to full websites with CMS and animations, everything is custom-made to match your brand.",
      bg: "from-purple-600 to-pink-500",
      titleColor: "text-pink-100",
    },
    {
      title: "Custom Code & Integrations",
      description:
        "Need extra features in Webflow? I can add custom code, connect APIs, and make your site do more than what Webflow offers out of the box.",
      bg: "from-green-500 to-emerald-500",
      titleColor: "text-emerald-100",
    },
    {
      title: "UI/UX Design",
      description:
        "I design websites that are easy to use and look great. The goal is always a smooth user experience that feels good on both desktop and mobile.",
      bg: "from-primary to-accent",
      titleColor: "text-white",
    },
    {
      title: "Performance & SEO Optimization",
      description:
        "I make sure your website loads fast, ranks well on Google, and works perfectly on all devices. Better speed means better results.",
      bg: "from-rose-500 to-red-500",
      titleColor: "text-red-100",
    },
    {
      title: "Hosting & Deployment",
      description:
        "I take care of getting your site online using Webflow, Vercel, or Netlify. Fast, secure, and with everything set up the right way.",
      bg: "from-indigo-600 to-blue-500",
      titleColor: "text-indigo-100",
    },
  ];

  return (
    <section
      className="py-8 md:py-24 px-[5vw] relative overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] text-white backdrop-blur-sm"
      id="services"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 50%, rgba(34, 211, 238, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(249, 115, 22, 0.1) 0%, transparent 50%)",
      }}
    >
      <div className="container">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary text-3xl md:text-5xl font-extrabold tracking-wide uppercase drop-shadow-lg animate-pulse mb-4">
            My Services
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-300">
            I craft full-stack experiences that blend design, performance, and
            modern development practices.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 perspective-[1500px]">
          {services.map((service, index) => (
            <div
              key={index}
              className={`min-h-[220px] p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300 ease-in-out bg-gradient-to-br ${service.bg} cursor-pointer`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <h3
                className={`text-2xl font-semibold mb-3 ${service.titleColor}`}
              >
                {service.title}
              </h3>
              <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
