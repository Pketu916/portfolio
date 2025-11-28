import React from "react";
import { Link } from "react-router-dom";
import projectData from "./projectData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const WorkSample = () => {
  // Filter featured projects
  const featuredProjects = projectData.filter((project) => project.featured);

  return (
    <section
      id="projects"
      className="bg-gradient-to-br from-[#111] via-[#0f0f0f] to-[#111] text-white px-4 sm:px-6 md:px-12 lg:px-24 py-16 md:py-24 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Section Title */}
        <div className="text-center mb-10 md:mb-12">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-wide uppercase drop-shadow-lg mb-3">
            🚀 Crazy Work Showcase
          </h1>
          <p className="text-gray-400 text-xs md:text-sm max-w-2xl mx-auto">
            Featured projects that showcase innovation, creativity, and
            technical excellence
          </p>
        </div>

        {/* Swiper Slider */}
        <div className="relative w-full max-w-7xl mx-auto mb-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            loop={true}
            className="work-swiper"
          >
            {featuredProjects.map((project) => {
              // Limit technologies to first 4
              const limitedTechnologies = project.technologies.slice(0, 4);
              const hasMoreTech = project.technologies.length > 4;

              return (
                <SwiperSlide key={project.id} className="h-full">
                  <div className="flex flex-col h-full gap-4 pb-6 bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all group">
                    {/* Image Section - Top */}
                    <div className="relative w-full h-[250px] md:h-[300px] lg:h-[320px] overflow-hidden">
                      <img
                        src={project.imageUrl}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    </div>

                    {/* Content Section - Below Image */}
                    <div className="flex flex-col flex-grow justify-between px-4 pb-4">
                      <div className="space-y-3">
                        {/* Project Name */}
                        <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent line-clamp-1">
                          {project.name}
                        </h2>

                        {/* Description - 2 lines with ellipsis */}
                        <p
                          className="text-gray-300 text-sm md:text-base leading-relaxed"
                          style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {project.description}
                        </p>

                        {/* Technologies - Limited to 4 */}
                        <div className="flex flex-wrap gap-1.5">
                          {limitedTechnologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-white/10 backdrop-blur-sm border border-primary/20 text-xs md:text-sm px-2.5 py-1 rounded-full font-medium text-primary"
                            >
                              {tech}
                            </span>
                          ))}
                          {hasMoreTech && (
                            <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-xs md:text-sm px-2.5 py-1 rounded-full font-medium text-gray-400">
                              +{project.technologies.length - 4}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-2 pt-4">
                        {project.liveDemo && (
                          <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 px-4 py-2 bg-gradient-to-r from-accent to-accent-dark rounded-lg text-sm font-semibold text-white text-center transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent/50"
                          >
                            Live Demo
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-sm font-semibold text-white text-center transition-all hover:bg-white/20 hover:scale-105"
                          >
                            GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button
            className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all group"
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all group"
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="inline-block px-8 py-3 text-white font-semibold bg-gradient-to-r from-primary to-accent rounded-full hover:scale-105 hover:shadow-lg hover:shadow-primary/50 transition-all"
          >
            View All Projects
          </Link>
        </div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .work-swiper {
          padding-bottom: 60px;
        }

        .work-swiper .swiper-wrapper {
          display: flex;
          align-items: stretch;
        }

        .work-swiper .swiper-pagination {
          bottom: 0 !important;
        }

        .work-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.3);
          width: 12px;
          height: 12px;
          transition: all 0.3s;
        }

        .work-swiper .swiper-pagination-bullet-active {
          background: rgb(34, 211, 238);
          width: 32px;
          border-radius: 6px;
        }

        .work-swiper .swiper-slide {
          height: auto;
          display: flex;
        }

        .work-swiper .swiper-slide > div {
          width: 100%;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </section>
  );
};

export default WorkSample;
