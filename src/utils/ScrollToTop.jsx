// src/utils/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use setTimeout to ensure DOM is ready
    const scrollToTop = () => {
      // Handle Lenis smooth scroll if present (priority)
      if (window.lenis) {
        window.lenis.scrollTo(0, { immediate: true });
        // Also set scroll position directly
        setTimeout(() => {
          window.scrollTo(0, 0);
          if (document.documentElement) {
            document.documentElement.scrollTop = 0;
          }
          if (document.body) {
            document.body.scrollTop = 0;
          }
        }, 0);
      } else {
        // Fallback if Lenis is not available
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "instant",
        });

        if (document.documentElement) {
          document.documentElement.scrollTop = 0;
        }
        if (document.body) {
          document.body.scrollTop = 0;
        }
      }
    };

    // Small delay to ensure page has rendered
    const timeoutId = setTimeout(scrollToTop, 0);

    // Also try immediately
    scrollToTop();

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
