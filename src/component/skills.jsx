import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";

gsap.registerPlugin(Draggable, InertiaPlugin);

const Skills = () => {
  const controllerRef = useRef(null);
  const gridRef = useRef(null);
  const old = useRef({ x: 0, y: 0 });
  const hoveredCards = useRef(new Set());

  useEffect(() => {
    const controller = controllerRef.current;
    const cards = gridRef.current.querySelectorAll(".tool-card");

    let deltaX = 0;
    let deltaY = 0;

    const draggable = Draggable.create(controller, {
      type: "x,y",
      inertia: true,
      edgeResistance: 0.7,
      bounds: {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      },
      onDrag() {
        deltaX = this.x - old.current.x;
        deltaY = this.y - old.current.y;
        old.current = { x: this.x, y: this.y };
        triggerPhysics();
      },
      onThrowUpdate() {
        deltaX = this.x - old.current.x;
        deltaY = this.y - old.current.y;
        old.current = { x: this.x, y: this.y };
        triggerPhysics();
      },
      onRelease() {
        gsap.to(controller, {
          duration: 1.5,
          x: 0,
          y: 0,
          ease: "elastic.out(1, 0.4)",
          onUpdate: triggerPhysics,
        });
        old.current = { x: 0, y: 0 };
      },
    })[0];

    function triggerPhysics() {
      const ctrlRect = controller.getBoundingClientRect();

      cards.forEach((card) => {
        const cardRect = card.getBoundingClientRect();

        const overlap = !(
          ctrlRect.right < cardRect.left ||
          ctrlRect.left > cardRect.right ||
          ctrlRect.bottom < cardRect.top ||
          ctrlRect.top > cardRect.bottom
        );

        if (overlap && !hoveredCards.current.has(card)) {
          hoveredCards.current.add(card);
          physicsBounce(card);
        } else if (!overlap && hoveredCards.current.has(card)) {
          hoveredCards.current.delete(card);
        }
      });
    }

    function physicsBounce(card) {
      const angle = Math.random() * Math.PI * 2;
      const force = 50 + Math.random() * 50;
      const velocityX = Math.cos(angle) * force + deltaX * 25;
      const velocityY = Math.sin(angle) * force + deltaY * 25;

      const tl = gsap.timeline();

      tl.to(card, {
        x: `+=${velocityX}`,
        y: `+=${velocityY}`,
        rotate: (Math.random() - 0.5) * 40,
        scale: 1.1,
        ease: "power3.out",
        duration: 1,
      });

      tl.to(card, {
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        // ease: "elastic.out(1, 0.4)",
        ease: "power3.out",
        duration: 1,
      });
    }
  }, []);

  const toolboxItems = [
    ["React.js", "https://cdn.worldvectorlogo.com/logos/react-2.svg"],
    ["Node.js", "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"],
   ["webflow", "https://www.svgrepo.com/show/354543/webflow.svg"],
    ["Tailwind CSS", "https://www.svgrepo.com/show/374118/tailwind.svg"],
    ["JavaScript", "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"],
    ["GSAP", "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg"],
    ["TypeScript", "https://cdn.worldvectorlogo.com/logos/typescript.svg"],
    // ["MongoDB", "https://cdn-icons-png.flaticon.com/512/919/919836.png"],
    ["CSS", "https://cdn.worldvectorlogo.com/logos/css-3.svg"],
    ["GitHub", "https://cdn-icons-png.flaticon.com/512/733/733553.png"],
    ["Figma", "https://cdn-icons-png.flaticon.com/512/5968/5968705.png"],
    ["Vercel", "https://cdn.worldvectorlogo.com/logos/vercel.svg"],
    ["HTML", "https://cdn.worldvectorlogo.com/logos/html-1.svg"],
  ];

  return (
    <section
      className="bg-black flex flex-col items-center relative overflow-hidden py-8 md:py-24"
      id="toolbox"
    >
      <div className="custom-container">
        <div className="w-[70vw] flex flex-col items-start gap-[5vw]">
          <h2
            className="text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 
text-3xl md:text-5xl font-extrabold tracking-wide uppercase drop-shadow-lg animate-pulse w-full"
          >
            My Toolbox
          </h2>

          <div
            ref={gridRef}
            className="grid grid-cols-3 sm:grid-cols-4 gap-6 w-full relative"
          >
            {toolboxItems.map(([label, icon], i) => (
              <div
                key={i}
                className="tool-card gap-[1vw] w-[22vw] md:w-[11vw] rounded-[1vw] bg-white shadow-[0_0.5vw_1.5vw_rgba(0,255,255,0.2)] flex flex-col items-center justify-center cursor-grab select-none transition-transform"
              >
                <img
                  src={icon}
                  alt={label}
                  className="w-[60%] pointer-events-none"
                />
                <span className="text-[2vw] md:text-[1vw] font-semibold text-center text-black">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div
            ref={controllerRef}
            className="w-[10vw] h-[10vw] md:w-[5vw] md:h-[5vw] rounded-full bg-cyan-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 cursor-grab shadow-[0_0_1vw_rgba(0,0,0,0.3)] flex items-center justify-center text-white font-bold text-[1vw] select-none"
          >
            Drag
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
