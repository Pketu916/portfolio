import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";

gsap.registerPlugin(Draggable, InertiaPlugin);

const skills = () => {
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
      edgeResistance: 0.8,
      bounds: {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      },
      onPress() {
        const rect = controller.getBoundingClientRect();
        const offsetX = this.pointerX - rect.left;
        const offsetY = this.pointerY - rect.top;
        this.applyBounds({ ...this.vars.bounds });
        this.startDragX = offsetX;
        this.startDragY = offsetY;
      },
      onDrag() {
        deltaX = this.x - old.current.x;
        deltaY = this.y - old.current.y;
        old.current = { x: this.x, y: this.y };
        checkHoverEffect();
      },
      onThrowUpdate() {
        deltaX = this.x - old.current.x;
        deltaY = this.y - old.current.y;
        old.current = { x: this.x, y: this.y };
        checkHoverEffect();
      },
      onDragEnd() {
        gsap.to(controller, {
          duration: 1,
          x: 0,
          y: 0,
          ease: "elastic.out(1, 0.5)",
          onUpdate: checkHoverEffect,
        });
        old.current = { x: 0, y: 0 };
      },
    })[0];

    function checkHoverEffect() {
      const ctrlRect = controller.getBoundingClientRect();

      cards.forEach((card) => {
        const cardRect = card.getBoundingClientRect();

        const isOverlap = !(
          ctrlRect.right < cardRect.left ||
          ctrlRect.left > cardRect.right ||
          ctrlRect.bottom < cardRect.top ||
          ctrlRect.top > cardRect.bottom
        );

        if (isOverlap && !hoveredCards.current.has(card)) {
          hoveredCards.current.add(card);
          triggerHoverAnimation(card);
        } else if (!isOverlap && hoveredCards.current.has(card)) {
          hoveredCards.current.delete(card);
        }
      });
    }

    function triggerHoverAnimation(card) {
      const tl = gsap.timeline({ onComplete: () => tl.kill() });

      tl.to(card, {
        inertia: {
          x: { velocity: deltaX * 30, end: 0 },
          y: { velocity: deltaY * 30, end: 0 },
        },
        duration: 1,
        ease: "power3.out",
      });

      tl.to(
        card,
        {
          rotate: (Math.random() - 0.5) * 15,
          yoyo: true,
          repeat: 1,
          ease: "sine.inOut",
        },
        "<"
      );
    }
  }, []);

  const toolboxItems = [
    ["GSAP", "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg"],
    ["Figma", "https://cdn-icons-png.flaticon.com/512/5968/5968705.png"],
    ["Firebase", "https://www.svgrepo.com/show/373589/firebase.svg"],
    ["MongoDB", "https://cdn-icons-png.flaticon.com/512/919/919836.png"],
    ["Next.js", "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"],
    ["Tailwind", "https://www.svgrepo.com/show/374118/tailwind.svg"],
    ["GitHub", "https://cdn-icons-png.flaticon.com/512/733/733553.png"],
    ["Framer Motion", "https://seeklogo.com/images/F/framer-logo-36668EBB03-seeklogo.com.png"],
    ["Netlify", "https://cdn.worldvectorlogo.com/logos/netlify.svg"],
    ["Postman", "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"],
    ["VS Code", "https://cdn-icons-png.flaticon.com/512/906/906324.png"],
    ["Vercel", "https://cdn.worldvectorlogo.com/logos/vercel.svg"],
  ];

  return (
    <section className="bg-black flex flex-col items-center py-[4vw] relative">
      <div className="custom-container">
        <div className="w-[70vw] flex flex-col items-start gap-[5vw]">
          <h2 className="text-white font-bold text-3xl">MY TOOLBOX</h2>

          <div
            ref={gridRef}
            className="grid grid-cols-3 sm:grid-cols-4 gap-6 w-full"
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
                <span className="text-[2vw] md:text-[1vw] font-semibold text-center text-black">{label}</span>
              </div>
            ))}
          </div>

          <div
            ref={controllerRef}
            className="w-[10vw] h-[10vw] md:w-[5vw] md:h-[5vw] rounded-full bg-cyan-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 cursor-grab shadow-[0_0_1vw_rgba(0,0,0,0.3)] flex items-center justify-center text-white font-bold text-[1vw] select-none"
          >
            Drag me
          </div>
        </div>
      </div>
    </section>
  );
};

export default skills;
