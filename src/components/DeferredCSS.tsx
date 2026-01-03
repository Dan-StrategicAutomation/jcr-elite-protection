"use client";

import { useEffect } from "react";

import { injectCriticalCSS, loadCSSAsync } from "@/utils/cssOptimization";

/**
 * DeferredCSS component for loading non-critical CSS after initial render
 * This prevents render-blocking and improves LCP/FCP metrics
 */
const DeferredCSS: React.FC = () => {
  useEffect(() => {
    // Inject critical CSS immediately if not already present
    if (!document.querySelector('[data-critical="true"]')) {
      injectCriticalCSS();
    }

    // Load non-critical CSS files after initial render
    const loadNonCriticalCSS = async () => {
      try {
        // Wait for initial render to complete
        await new Promise(resolve => setTimeout(resolve, 100));

        // Load non-critical CSS files
        const nonCriticalStyles = [
          // These will be loaded after the critical path
          // Add any additional CSS files that aren't critical here
        ];

        // Load all non-critical styles in parallel
        await Promise.all(nonCriticalStyles.map(style => loadCSSAsync(style)));

        // Optimize performance after CSS loads
        optimizePerformance();
      } catch (error) {
        console.warn("Failed to load some non-critical CSS:", error);
      }
    };

    // Font preloading is now handled in index.html to avoid duplicates

    // Optimize performance after CSS loads
    const optimizePerformance = () => {
      // NOTE: Removed CSS containment and transform properties that were breaking fixed positioning
      // These properties create new stacking contexts that prevent fixed elements from positioning relative to viewport

      // Optimize scroll performance
      document.documentElement.style.scrollBehavior = "smooth";

      // Remove any unused CSS classes (basic cleanup)
      cleanupUnusedStyles();
    };

    // Basic cleanup of unused styles
    const cleanupUnusedStyles = () => {
      // This is a basic implementation - in production you'd use a more sophisticated tool
      const unusedClasses = ["unused-class-1", "unused-class-2"];

      unusedClasses.forEach(className => {
        const elements = document.querySelectorAll(`.${className}`);
        if (elements.length === 0) {
          // Remove unused CSS rules (this is a simplified example)
          // In practice, you'd use tools like PurgeCSS or similar
        }
      });
    };

    // Start the optimization process
    loadNonCriticalCSS();
  }, []);

  return null; // This component doesn't render anything
};

export default DeferredCSS;
