import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Marquee = () => {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const loopRef = useRef(null);
  const velocityRef = useRef(0);
  const hoveredRef = useRef(false);

  useEffect(() => {
    const items = itemRefs.current;

    const horizontalLoop = (items, config = {}) => {
      items = gsap.utils.toArray(items);
      let tl = gsap.timeline({
        repeat: config.repeat,
        paused: config.paused,
        defaults: { ease: "none" },
        onReverseComplete: () =>
          tl.totalTime(tl.rawTime() + tl.duration() * 100),
      });

      const length = items.length;
      const startX = items[0].offsetLeft;
      const times = [];
      const widths = [];
      const xPercents = [];
      let curIndex = 0;
      const pixelsPerSecond = (config.speed || 1) * 100;
      const snap =
        config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1);

      gsap.set(items, {
        xPercent: (i, el) => {
          const w = (widths[i] = parseFloat(
            gsap.getProperty(el, "width", "px")
          ));
          xPercents[i] = snap(
            (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
              gsap.getProperty(el, "xPercent")
          );
          return xPercents[i];
        },
      });

      gsap.set(items, { x: 0 });

      const totalWidth =
        items[length - 1].offsetLeft +
        (xPercents[length - 1] / 100) * widths[length - 1] -
        startX +
        items[length - 1].offsetWidth *
          gsap.getProperty(items[length - 1], "scaleX") +
        (parseFloat(config.paddingRight) || 0);

      items.forEach((item, i) => {
        const curX = (xPercents[i] / 100) * widths[i];
        const distanceToStart = item.offsetLeft + curX - startX;
        const distanceToLoop =
          distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");

        tl.to(
          item,
          {
            xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
            duration: distanceToLoop / pixelsPerSecond,
          },
          0
        )
          .fromTo(
            item,
            {
              xPercent: snap(
                ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
              ),
            },
            {
              xPercent: xPercents[i],
              duration:
                (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
              immediateRender: false,
            },
            distanceToLoop / pixelsPerSecond
          )
          .add("label" + i, distanceToStart / pixelsPerSecond);

        times[i] = distanceToStart / pixelsPerSecond;
      });

      const toIndex = (index, vars = {}) => {
        if (Math.abs(index - curIndex) > length / 2)
          index += index > curIndex ? -length : length;
        const newIndex = gsap.utils.wrap(0, length, index);
        let time = times[newIndex];
        if (time > tl.time() !== index > curIndex) {
          vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
          time += tl.duration() * (index > curIndex ? 1 : -1);
        }
        curIndex = newIndex;
        vars.overwrite = true;
        return tl.tweenTo(time, vars);
      };

      tl.toIndex = (index, vars) => toIndex(index, vars);
      tl.progress(1, true).progress(0, true);

      return tl;
    };

    const loop = horizontalLoop(itemRefs.current, {
      repeat: -1,
      paddingRight: 60,
    });

    loopRef.current = loop;

    const pauseLoop = () => {
      loop.pause();
      hoveredRef.current = true;
    };

    const playLoop = () => {
      loop.play();
      hoveredRef.current = false;
    };

    const container = containerRef.current;
    container.addEventListener("pointerenter", pauseLoop);
    container.addEventListener("pointerleave", playLoop);

    let scrollTimeout;

    window.addEventListener("wheel", (e) => {
      if (!hoveredRef.current) {
        velocityRef.current += e.deltaY > 0 ? 0.001 : -0.001;
        velocityRef.current = Math.max(
          Math.min(velocityRef.current, 0.003),
          -0.003
        );

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          velocityRef.current = 0;
        }, 500);
      }
    });

    const updateLoop = () => {
      if (loopRef.current) {
        loopRef.current.progress(
          loopRef.current.progress() +
            velocityRef.current * gsap.ticker.deltaRatio()
        );
      }
    };

    gsap.ticker.add(updateLoop);

    return () => {
      container.removeEventListener("pointerenter", pauseLoop);
      container.removeEventListener("pointerleave", playLoop);
      gsap.ticker.remove(updateLoop);
    };
  }, []);

  const items = [
    "Full Stack Developer",
    "Webflow Expert",
    "Backend Ninja",
    "Animation Lover",
    "React Specialist",
    "MongoDB Enthusiast",
    "Tailwind CSS Pro",
    "MERN Stack Specialist",
    "JavaScript Addict",
    "API Integration Expert",
  ];

  return (
    <div
      ref={containerRef}
      className="overflow-hidden whitespace-nowrap py-4 sm:py-5 md:py-6 bg-gradient-to-b from-cyan-400 to-blue-800 backdrop-blur-sm"
    >
      <div className="flex gap-10 sm:gap-14 md:gap-20 w-max px-6 sm:px-10">
        {items.map((text, index) => (
          <div
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            className="project-name text-base sm:text-xl md:text-2xl font-semibold tracking-widest text-white whitespace-nowrap"
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
