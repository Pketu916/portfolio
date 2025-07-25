import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img1.png";
import img5 from "../assets/img5.png";
import img1 from "../assets/img1.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import mockup from "../assets/mockup.webp";

const projectData = [
  {
    id: "1",
    name: "Coza Store",
    description:
      "Modern eCommerce website with interactive product slider, responsive design, and clean UI using HTML, CSS, and Swiper.js.",
    technologies: ["HTML", "CSS", "Swiper.js", "JavaScript"],
    github: "https://github.com/Pketu916/appsRow/tree/main/everX",
    liveDemo: "https://apps-row-8dqs.vercel.app/",
    imageUrl: img1,
  },
  {
    id: "2",
    name: "Ever X",
    description:
      "Full-stack appointment booking system with secure authentication, patient management, responsive dashboard, and RESTful API using MERN stack.",
    technologies: ["HTML", "CSS", "Swiper.js", "JavaScript"],
    github: "https://github.com/Pketu916/appsRow/tree/main/everX",
    liveDemo: "https://everx.vercel.app/",
    imageUrl: img2,
  },
  {
    id: "3",
    name: "Nestora",
    description:
      "Modern fashion landing page with responsive design, animated sections, smooth scroll, and clean layout using Tailwind CSS.",
    technologies: ["HTML", "CSS", "Swiper.js", "JavaScript"],
    github: "https://github.com/Pketu916/appsRow/tree/main/nestora",
    liveDemo: "https://nestora-three.vercel.app/",
    imageUrl: img3,
  },
  {
    id: "4",
    name: "Samarth E-Mobility",
    description:
      "Next-gen EV company website with animated hero sections, Framer Motion effects, and fully responsive design.",
    technologies: ["React.js", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/Pketu916/samarth-e-mobility",
    liveDemo: "https://samarth-e-mobility-xrx4.vercel.app/",
    imageUrl: img4,
  },
  {
    id: "5",
    name: "Dashify",
    description:
      "SaaS dashboard UI with React, reusable components, animated transitions, and a clean, responsive layout.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Pketu916/appsRow/tree/main/dashify",
    liveDemo: "https://apps-row-ioxu.vercel.app/",
    imageUrl: img5,
  },
  {
    id: "6",
    name: "colaba",
    description:
      "Portfolio website built with Webflow featuring smooth animations, clean layout, and responsive sections to showcase creative work.",
    technologies: ["Webflow", "HTML", "CSS", "javascript"],
    github: null, // No GitHub repo for Webflow
    liveDemo: "https://ketus-trendy-site.webflow.io/",
    imageUrl: img6, // <- Replace with the actual image you use
  },
  {
    id: "7",
    name: "Kevin Portfolio",
    description:
      "Portfolio website built with Webflow featuring smooth animations, clean layout, and responsive sections to showcase creative work.",
    technologies: ["Webflow", "HTML", "CSS", "javascript"],
    github: null, // No GitHub repo for Webflow
    liveDemo: "https://ketus-kevin-portfolio-6bca6f.webflow.io/",
    imageUrl: img7, // <- Replace with the actual image you use
  },
  {
    id: "8",
    name: "user-Management",
    description:
      "Full-stack appointment booking system with secure authentication, patient management, responsive dashboard, and RESTful API using MERN stack.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "javascript",
    ],
    github: "https://github.com/Pketu916/appsRow/tree/main/user-Management",
    liveDemo: "https://apps-row-zgn2.vercel.app/login",
    imageUrl: mockup,
  },
  {
    id: "9",
    name: "Backing-app",
    description:
      "A banking operation interface that allows users to manage deposits, withdrawals, fixed deposits (FDs), and loans with proper input validation. Built with React.js for the frontend and Node.js with Express.js for the backend. The app ensures smooth handling of transactions and user data, making it ideal for practice in full-stack user and financial management systems.",
    technologies: ["React.js", "Tailwind CSS", "JavaScript", "HTML"],
    github:
      "https://github.com/Pketu916/frontend-practice/tree/main/react-practice/React-project/banking-app",
    liveDemo: "https://frontend-practice-v9i6.vercel.app/",
    imageUrl: mockup,
  },
  {
    id: "10",
    name: "Sinar Education",
    description:
      "An educational landing page built using HTML, Tailwind CSS, and JavaScript. The design is responsive and modern, featuring smooth navigation, animated sections, and a clean layout to highlight educational services or institutions. Ideal for showcasing course offerings or institutional branding.",
    technologies: ["HTML", "Tailwind CSS", "JavaScript"],
    github:
      "https://github.com/Pketu916/frontend-practice/tree/main/HTML%20%2CCSS%20Project/tailwind%20css/template3",
    liveDemo: "https://task-avesta-o5mg.vercel.app/",
    imageUrl: mockup,
  },
  {
    id: "11",
    name: "Start",
    description:
      "A modern business or startup website template created using HTML, Tailwind CSS, and JavaScript. This project demonstrates a professional layout with responsive design, smooth UI components, and a structured section layout perfect for promoting products or services online.",
    technologies: ["HTML", "Tailwind CSS", "JavaScript"],
    github:
      "https://github.com/Pketu916/frontend-practice/tree/main/HTML%20%2CCSS%20Project/tailwind%20css/template1",
    liveDemo: "https://task-avesta-ykmv.vercel.app/",
    imageUrl: mockup,
  },
  {
    id: "12",
    name: "real estate(view.com)",
    description:
      "A full-stack real estate web application developed using React.js, Node.js, Express.js, and MongoDB. It allows users to browse property listings, view property details, and manage property data. The backend handles secure data transactions and user authentication, while the frontend offers a clean, interactive interface. Ideal for real-world property management and listing platforms.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
    ],
    github:
      "https://github.com/Pketu916/frontend-practice/tree/main/react-practice/view.com",
    liveDemo: null,
    imageUrl: mockup,
  },
  {
    id: "13",
    name: "Doctor Appointment",
    description:
      "Developed a full-stack Doctor Appointment web app for managing patients, scheduling, and maintaining medical records with admin login and secure data handling.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
    ],
    github: "https://github.com/Pketu916/Doctor-appoinment",
    liveDemo: null,
    imageUrl: mockup,
  },
];

export default projectData;
