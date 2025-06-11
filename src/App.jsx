// import { useEffect } from "react";
import "./App.css";
import Header from "./component/header";
import { Hero } from "./component/hero";
import Marquee from "./component/marquee";
import ProjectSection from "./component/ProjectSection";
import SkillGrid from "./component/skills";

function App() {
  // useEffect(() => {
  //   const setVH = () => {
  //     const vh = window.innerHeight * 0.01;
  //     document.documentElement.style.setProperty("--vh", `${vh}px`);
  //   };

  //   setVH();

  //   window.addEventListener("resize", setVH);
  //   return () => window.removeEventListener("resize", setVH);
  // }, []);

  return (
    <>
      <Header />
      <Hero />
      <Marquee />
      <ProjectSection />
      <SkillGrid />
    </>
  );
}

export default App;
