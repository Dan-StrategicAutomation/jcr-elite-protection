"use client";

import React, { useEffect } from "react";

/**
 * PreloadResources component for minimal critical resource preloading
 * Focuses only on resources that are immediately visible and needed
 */
const PreloadResources: React.FC = () => {
  useEffect(() => {
    // Minimal preloading to avoid unused resource warnings
    const preloadOnlyIfNeeded = () => {
      // Only preload hero image if we're on homepage and it's in viewport
      if (window.location.pathname === "/" && window.innerWidth > 768) {
        // Use intersection observer to only preload if hero will be visible
        const heroContainer = document.querySelector(".hero-container");
        if (heroContainer) {
          const observer = new IntersectionObserver(
            entries => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  const heroImage = new Image();
                  heroImage.src = "/assets/hero-bg.webp";
                  observer.disconnect();
                }
              });
            },
            { rootMargin: "50px" }
          );

          observer.observe(heroContainer);
        }
      }
    };

    // Delay to ensure DOM is ready
    const timer = setTimeout(preloadOnlyIfNeeded, 200);

    // PreloadResources component initialized silently

    return () => clearTimeout(timer);
  }, []);

  // This component doesn't render anything
  return null;
};

export default PreloadResources;
