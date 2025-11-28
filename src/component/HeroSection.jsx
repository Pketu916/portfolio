import { useEffect, useRef } from "react";

const HeroSection = ({
  title,
  subtitle,
  rotatingTexts = null,
  ctaText = null,
  ctaLink = null,
  isDark = false,
  height = "calc(100dvh-68px)",
}) => {
  const rotatingTextRef = useRef(null);

  useEffect(() => {
    if (rotatingTexts && rotatingTexts.length > 0) {
      let i = 0;

      const rotate = () => {
        if (!rotatingTextRef.current) return;
        rotatingTextRef.current.innerText = rotatingTexts[i];
        i = (i + 1) % rotatingTexts.length;
      };

      rotate();
      const interval = setInterval(rotate, 3000);
      return () => clearInterval(interval);
    }
  }, [rotatingTexts]);

  return (
    <section
      className={`relative w-full overflow-hidden ${
        isDark
          ? "bg-gradient-to-b from-[#0f0f0f] via-black to-[#0f0f0f] text-white"
          : "bg-gradient-to-b from-gray-50 to-white text-gray-900"
      }`}
      style={{ height }}
    >
      {/* Hero Content */}
      <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center px-2 md:px-4 flex flex-col items-center gap-4 w-[100%]">
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[0.15em] leading-tight ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className={`text-base sm:text-lg md:text-xl max-w-xl mt-2 ${
              isDark ? "text-white/80" : "text-gray-600"
            }`}
          >
            {subtitle}
          </p>
        )}

        {rotatingTexts && rotatingTexts.length > 0 && (
          <p
            ref={rotatingTextRef}
            className="text-primary text-lg sm:text-xl md:text-2xl font-medium h-[1.5em] mt-2"
          ></p>
        )}

        {ctaText && ctaLink && (
          <a
            href={ctaLink}
            className="px-6 py-2 text-base sm:text-lg bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark transition rounded-full font-semibold text-white"
          >
            {ctaText}
          </a>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
