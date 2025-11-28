import Benefits from "../component/Benefits";
import Footer from "../component/footer";
import Header from "../component/header";
import { Hero } from "../component/hero";
import Services from "../component/Services";
import WorkSample from "../component/WorkSample";
import Marquee from "../component/Marquee";
import Faq from "../component/Faq";
import CustomCursor from "../component/CustomCursor";

function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Header isDark={true} />
      <Hero />
      <Marquee />
      <Services />
      <WorkSample />
      <Benefits />
      <Faq />
      <Footer />
      <CustomCursor />
    </div>
  );
}

export default Home;
