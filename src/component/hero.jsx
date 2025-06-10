import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import heroImg from "../assets/ChatGPT Image Jun 10, 2025, 09_54_33 PM (4).jpg";

export const Hero = () => {
  const headingRef = useRef();
  const paraRef = useRef();

  useEffect(() => {
    // Heading animation
    const el = headingRef.current;
    const text = el.innerText;
    el.innerHTML = text
      .split("")
      .map((char) => `<span class="char inline-block">${char}</span>`)
      .join("");

    gsap.fromTo(
      ".char",
      { scale: 0, rotation: 180, opacity: 0 },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.6,
        repeat: -1,
        repeatDelay: 2,
        yoyo: true,
        ease: "back.out(1.7)",
      }
    );

    // Paragraph animation
    gsap.fromTo(
      paraRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        delay: 1,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section id="hero" className="h-[100vh] w-[100vw]">
      <div className="h-full w-full relative ">
        <div className="hero-text flex flex-col items-start gap-[1vw]">
          <h1 ref={headingRef}>Hello, I'm Ketu</h1>
          <p ref={paraRef} className=" text-shadow-2lg">
            a Frontend Developer crafting smooth digital experiences
          </p>
          <button className="paragraph">Click Me</button>
        </div>
        <figure className="-z-10">
          <img src={heroImg} alt="" />
        </figure>
        {/* <figure className="z-[1000]">
          <img src={heroImgRMbg} alt="" />
        </figure> */}
      </div>
    </section>
  );
};

export default Hero;
