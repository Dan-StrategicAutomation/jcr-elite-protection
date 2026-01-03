import { useEffect, useState } from "react";

interface UseScrollDetectionOptions {
  threshold?: number;
  element?: Element | null;
}

export const useScrollDetection = ({ threshold = 10, element }: UseScrollDetectionOptions = {}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Debug logging for mobile navbar issue investigation
  useEffect(() => {
    console.log("🔍 ScrollDetection Debug:", {
      timestamp: new Date().toISOString(),
      element: element ? "hero element provided" : "no hero element",
      isScrolled,
      threshold,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      scrollY: window.scrollY,
      userAgent: navigator.userAgent,
      touchSupport: "ontouchstart" in window,
      visualViewport: window.visualViewport
        ? {
            height: window.visualViewport.height,
            width: window.visualViewport.width,
            offsetTop: window.visualViewport.offsetTop,
            offsetLeft: window.visualViewport.offsetLeft,
          }
        : null,
    });
  }, [isScrolled, element, threshold]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop =
            window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

          console.log("🔍 Scroll Event Debug:", {
            timestamp: new Date().toISOString(),
            scrollTop,
            threshold,
            wouldTriggerScroll: scrollTop > threshold,
            element: element ? "hero element present" : "no hero element",
            currentIsScrolled: isScrolled,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight,
            },
            visualViewport: window.visualViewport
              ? {
                  height: window.visualViewport.height,
                  width: window.visualViewport.width,
                }
              : null,
          });

          // Only use scroll-based detection if no hero element is provided
          if (!element) {
            setIsScrolled(scrollTop > threshold);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    // Add scroll listeners with passive option for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", handleScroll);
    };
  }, [threshold, element]);

  // Handle hero section intersection observer for homepage
  useEffect(() => {
    if (!element) {
      // If no hero element, ensure scroll-based detection is active
      const scrollTop =
        window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      setIsScrolled(scrollTop > threshold);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Consider "not scrolled" only when element is fully visible
        const fullyVisible = entry.isIntersecting && entry.intersectionRatio >= 0.99;

        console.log("🔍 IntersectionObserver Debug:", {
          timestamp: new Date().toISOString(),
          isIntersecting: entry.isIntersecting,
          intersectionRatio: entry.intersectionRatio,
          fullyVisible,
          newIsScrolled: !fullyVisible,
          currentIsScrolled: isScrolled,
          boundingClientRect: entry.boundingClientRect,
          rootBounds: entry.rootBounds,
          targetClassName: entry.target.className,
        });

        setIsScrolled(!fullyVisible);
      },
      { threshold: [0, 0.99, 1] }
    );

    observer.observe(element);

    // Check initial state
    const rect = element.getBoundingClientRect();
    const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
    if (isInViewport) {
      const fullyVisible = rect.height * 0.99 < window.innerHeight - rect.top;
      setIsScrolled(!fullyVisible);
    }

    return () => observer.disconnect();
  }, [element, threshold]);

  return isScrolled;
};
