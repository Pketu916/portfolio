import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import WorkSampleCard from "./WorkSampleCard";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import heroImg1 from "../assets/ChatGPT Image Jun 10, 2025, 09_54_33 PM (4).jpg"; // Correct image import
import heroImg2 from "../assets//ChatGPT Image Jun 10, 2025, 09_54_33 PM (4)-Photoroom.png"; // Correct image import

import "./styles.css";

// Sample Project Data
const projects = [
  {
    name: "Doctor-appointment",
    description: "Developed a full-stack Doctor Appointment web application...",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API"],
    github: "https://github.com/Pketu916/Doctor-appoinment",
    liveDemo: "https://samarth-e-mobility-xrx4.vercel.app/",
    sourceCode: "https://github.com/Pketu916/Doctor-appoinment",
    imageUrl: heroImg1,
  },
  {
    name: "Doctor-appointment",
    description: "Developed a full-stack Doctor Appointment web application...",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API"],
    github: "https://github.com/Pketu916/Doctor-appoinment",
    liveDemo: "https://samarth-e-mobility-xrx4.vercel.app/",
    sourceCode: "https://github.com/Pketu916/Doctor-appoinment",
    imageUrl: heroImg1,
  },
  {
    name: "Doctor-appointment",
    description: "Developed a full-stack Doctor Appointment web application...",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API"],
    github: "https://github.com/Pketu916/Doctor-appoinment",
    liveDemo: "https://samarth-e-mobility-xrx4.vercel.app/",
    sourceCode: "https://github.com/Pketu916/Doctor-appoinment",
    imageUrl: heroImg1,
  },
  {
    name: "Doctor-appointment",
    description: "Developed a full-stack Doctor Appointment web application...",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API"],
    github: "https://github.com/Pketu916/Doctor-appoinment",
    liveDemo: "https://samarth-e-mobility-xrx4.vercel.app/",
    sourceCode: "https://github.com/Pketu916/Doctor-appoinment",
    imageUrl: heroImg1,
  },
  {
    name: "Doctor-appointment",
    description: "Developed a full-stack Doctor Appointment web application...",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API"],
    github: "https://github.com/Pketu916/Doctor-appoinment",
    liveDemo: "https://samarth-e-mobility-xrx4.vercel.app/",
    sourceCode: "https://github.com/Pketu916/Doctor-appoinment",
    imageUrl: heroImg1,
  },
  {
    name: "Real Estate Website",
    description: "Developed a user-friendly Real Estate web platform...",
    technologies: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    github:
      "https://github.com/Pketu916/frontend-practice/tree/main/react-practice/view.com",
    liveDemo: "https://frontend-practice-sable.vercel.app/",
    imageUrl: heroImg2, // Use imported heroImg
  },
];

export const WorkSample = () => {
  const [loading, setLoading] = useState(true);

  // Update loading state based on all images
  useEffect(() => {
    const images = projects.map((project) => project.imageUrl); // Collect all image URLs
    let loadedImages = 0;

    images.forEach((imageSrc) => {
      const img = new Image();
      img.src = imageSrc;
      img.onload = () => {
        loadedImages++;
        if (loadedImages === images.length) {
          setLoading(false); // All images loaded
        }
      };
    });
  }, []);

  return (
    <div className="work-sample-container">
      {loading ? (
        <div>Loading...</div> // Show loading text or spinner while images are loading
      ) : (
        <Swiper
          cssMode={true}
          navigation={true}
          loop={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="slide">
              {/* Use an img tag to display the background image */}
              <img
                src={project.imageUrl}
                alt={project.name}
                className="slide-image"
              />
              <WorkSampleCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default WorkSample;
