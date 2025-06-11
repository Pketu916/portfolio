// import { useEffect } from "react";
import "./App.css";
import Header from "./component/header";
import { Hero } from "./component/hero";
// import Marquee from "./component/marquee";
import SkillGrid from "./component/skills";
import WorkSample from "./component/WorkSample";

function App() {
  return (
    <>
      <Header />
      <Hero />
      {/* <Marquee /> */}
      {/* <ProjectSection /> */}
      <WorkSample />
      <SkillGrid />
    </>
  );
}

export default App;
