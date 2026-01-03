"use client";

import { useEffect } from "react";

import { addMobileEventHandlers, initializeMobileOptimizations } from "@/utils/mobileOptimization";

/**
 * MobilePerformanceOptimizer component
 * Initializes mobile-specific performance optimizations and UX enhancements
 */
const MobilePerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // Initialize mobile optimizations
    initializeMobileOptimizations();

    // Add mobile-specific event handlers
    addMobileEventHandlers();

    // Additional mobile-specific optimizations
    const optimizeMobileExperience = () => {
      // Optimize for mobile browsers
      if (typeof window !== "undefined") {
        // Prevent zoom on input focus for iOS
        const viewportMeta = document.querySelector('meta[name="viewport"]');
        if (viewportMeta && /iPad|iPhone|iPod/.test(navigator.userAgent)) {
          viewportMeta.setAttribute(
            "content",
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          );
        }

        // Add mobile-specific classes to body
        document.body.classList.add("mobile-optimized");

        // Optimize scroll performance
        document.documentElement.style.scrollBehavior = "smooth";

        // NOTE: Removed CSS containment as it breaks fixed positioning
        // CSS containment creates new stacking contexts that prevent fixed elements from positioning relative to viewport

        // Handle mobile viewport height issues
        const setVH = () => {
          const vh = window.innerHeight * 0.01;
          document.documentElement.style.setProperty("--vh", `${vh}px`);
        };

        setVH();

        // Listen to multiple events that can change viewport height
        window.addEventListener("resize", setVH);
        window.addEventListener("orientationchange", setVH);

        // Handle iOS Safari address bar show/hide
        let ticking = false;
        const handleScroll = () => {
          if (!ticking) {
            window.requestAnimationFrame(() => {
              setVH();
              ticking = false;
            });
            ticking = true;
          }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });

        // Cleanup function
        return () => {
          window.removeEventListener("resize", setVH);
          window.removeEventListener("orientationchange", setVH);
          window.removeEventListener("scroll", handleScroll);
        };
      }
    };

    // Run optimizations
    const cleanup = optimizeMobileExperience();

    // Cleanup on unmount
    return cleanup;
  }, []);

  // This component doesn't render anything
  return null;
};

export default MobilePerformanceOptimizer;
