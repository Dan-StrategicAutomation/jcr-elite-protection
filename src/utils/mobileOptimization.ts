/**
 * Mobile optimization utilities for enhanced UX
 * Implements mobile-first design patterns and performance optimizations
 */

import { BREAKPOINTS } from "@/config/breakpoints";

// Touch target minimum sizes for accessibility
export const TOUCH_TARGETS = {
  minimum: 44, // WCAG 2.2 AA minimum
  recommended: 48, // Better UX standard
  comfortable: 56, // Optimal for most users
} as const;

/**
 * Detect if device supports touch
 */
export const isTouchDevice = (): boolean => {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    // @ts-expect-error - for older browsers
    navigator.msMaxTouchPoints > 0
  );
};

/**
 * Detect device type based on screen size and capabilities
 */
export const getDeviceType = (): "mobile" | "tablet" | "desktop" => {
  if (typeof window === "undefined") return "desktop";

  const width = window.innerWidth;

  if (width < BREAKPOINTS.tablet) {
    return "mobile";
  } else if (width < BREAKPOINTS.laptop) {
    return "tablet";
  } else {
    return "desktop";
  }
};

/**
 * Get optimal image sizes for responsive images
 */
export const getResponsiveImageSizes = (baseWidth: number) => {
  const deviceType = getDeviceType();

  switch (deviceType) {
    case "mobile":
      return {
        width: Math.min(baseWidth, 480),
        sizes: "(max-width: 480px) 100vw, 480px",
        srcSet: [320, 480].map(w => `${w}w`).join(", "),
      };
    case "tablet":
      return {
        width: Math.min(baseWidth, 768),
        sizes: "(max-width: 768px) 100vw, 768px",
        srcSet: [480, 768].map(w => `${w}w`).join(", "),
      };
    default:
      return {
        width: baseWidth,
        sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
        srcSet: [480, 768, 1024, 1280].map(w => `${w}w`).join(", "),
      };
  }
};

/**
 * Optimize scroll behavior for mobile
 */
export const optimizeScrollBehavior = () => {
  // Prevent elastic scrolling on iOS
  document.body.style.overscrollBehavior = "none";

  // Optimize scroll performance
  document.documentElement.style.scrollBehavior = "smooth";

  // Add momentum scrolling for iOS
  (document.body.style as Record<string, string>).webkitOverflowScrolling = "touch";
};

/**
 * Handle mobile viewport height issues (iOS Safari)
 */
export const handleMobileViewport = () => {
  const setViewportHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  // Set initial value
  setViewportHeight();

  // Update on resize (handles iOS Safari toolbar)
  window.addEventListener("resize", setViewportHeight);
  window.addEventListener("orientationchange", setViewportHeight);

  return () => {
    window.removeEventListener("resize", setViewportHeight);
    window.removeEventListener("orientationchange", setViewportHeight);
  };
};

/**
 * Optimize touch interactions
 */
export const optimizeTouchInteractions = () => {
  // Disable double-tap zoom on buttons and links
  const style = document.createElement("style");
  style.textContent = `
    button, a, [role="button"] {
      touch-action: manipulation;
      -webkit-tap-highlight-color: transparent;
    }

    /* Improve touch feedback */
    button:active, a:active, [role="button"]:active {
      transform: scale(0.98);
      transition: transform 0.1s ease;
    }

    /* Optimize for mobile viewport */
    .mobile-optimized {
      min-height: calc(var(--vh, 1vh) * 100);
    }

    /* Better mobile form inputs */
    input, textarea, select {
      font-size: 16px; /* Prevents zoom on iOS */
      border-radius: 8px;
      padding: 12px;
    }

    /* Mobile-friendly focus states */
    @media (max-width: 768px) {
      *:focus {
        outline: 3px solid hsl(var(--primary));
        outline-offset: 2px;
      }
    }
  `;

  document.head.appendChild(style);

  return () => {
    document.head.removeChild(style);
  };
};

/**
 * Detect and handle mobile browser quirks
 */
export const handleMobileBrowserQuirks = () => {
  const userAgent = navigator.userAgent;

  // iOS Safari specific optimizations
  if (/iPad|iPhone|iPod/.test(userAgent)) {
    // Prevent zoom on input focus
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    if (viewportMeta) {
      viewportMeta.setAttribute(
        "content",
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      );
    }

    // Handle iOS safe areas
    document.documentElement.style.setProperty("--safe-area-inset-top", "env(safe-area-inset-top)");
    document.documentElement.style.setProperty(
      "--safe-area-inset-bottom",
      "env(safe-area-inset-bottom)"
    );
  }

  // Android Chrome specific optimizations
  if (/Android.*Chrome/.test(userAgent)) {
    // Optimize for Chrome's address bar behavior
    document.documentElement.style.setProperty("--android-chrome-fix", "1");
  }
};

/**
 * Performance optimization for mobile devices
 */
export const optimizeMobilePerformance = () => {
  // Reduce animations on low-end devices
  if (
    "deviceMemory" in navigator &&
    (navigator as { deviceMemory?: number }).deviceMemory &&
    (navigator as { deviceMemory: number }).deviceMemory < 4
  ) {
    document.documentElement.classList.add("reduce-motion");
  }

  // Optimize images for mobile
  const images = document.querySelectorAll("img");
  images.forEach(img => {
    if (!img.loading) {
      img.loading = "lazy";
    }

    // Add mobile-optimized sizes if not present
    if (!img.sizes && img.srcset) {
      img.sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw";
    }
  });

  // Mobile-specific optimizations are now handled through the main CSS bundle
  // No need to preload separate mobile-critical.css as it's included in the main bundle
};

/**
 * Initialize all mobile optimizations
 */
export const initializeMobileOptimizations = () => {
  // Run optimizations when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      optimizeScrollBehavior();
      handleMobileViewport();
      optimizeTouchInteractions();
      handleMobileBrowserQuirks();
      optimizeMobilePerformance();
    });
  } else {
    optimizeScrollBehavior();
    handleMobileViewport();
    optimizeTouchInteractions();
    handleMobileBrowserQuirks();
    optimizeMobilePerformance();
  }
};

/**
 * Mobile-specific event handlers
 */
export const addMobileEventHandlers = () => {
  // Handle orientation change
  window.addEventListener("orientationchange", () => {
    // Delay to allow browser to update dimensions
    setTimeout(() => {
      handleMobileViewport();
    }, 100);
  });

  // Handle mobile menu interactions
  document.addEventListener("touchstart", e => {
    const target = e.target as HTMLElement;

    // Close mobile menu when tapping outside
    if (target.closest(".mobile-menu-overlay") && !target.closest(".mobile-menu-content")) {
      const closeEvent = new CustomEvent("closeMobileMenu");
      document.dispatchEvent(closeEvent);
    }
  });

  // Optimize scroll performance on mobile
  let ticking = false;
  const optimizedScrollHandler = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        // Handle scroll-based animations efficiently
        ticking = false;
      });
      ticking = true;
    }
  };

  if (getDeviceType() === "mobile") {
    window.addEventListener("scroll", optimizedScrollHandler, { passive: true });
  }
};
