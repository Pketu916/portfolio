import "./App.css";
import Header from "./component/header";
import { Hero } from "./component/hero";
import SkillGrid from "./component/skills";
import WorkSample from "./component/WorkSample";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <WorkSample />
      <SkillGrid />
    </>
  );
}

export default App;
