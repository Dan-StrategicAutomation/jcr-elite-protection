/**
 * Centralized Breakpoint System for JCR Elite Protection Website
 * Single source of truth for all responsive design breakpoints
 * Eliminates duplication across multiple files
 */

import React from "react";

// Base breakpoint values in pixels
export const BREAKPOINTS = {
  mobile: 320,
  mobileLarge: 425,
  tablet: 768,
  laptop: 1024,
  desktop: 1440,
  desktopLarge: 1920,
} as const;

// Media query strings for CSS
export const MEDIA_QUERIES = {
  mobile: `(max-width: ${BREAKPOINTS.tablet - 1}px)`,
  mobileOnly: `(max-width: ${BREAKPOINTS.mobileLarge - 1}px)`,
  mobileLarge: `(min-width: ${BREAKPOINTS.mobile}px) and (max-width: ${BREAKPOINTS.tablet - 1}px)`,
  tablet: `(min-width: ${BREAKPOINTS.tablet}px) and (max-width: ${BREAKPOINTS.laptop - 1}px)`,
  tabletUp: `(min-width: ${BREAKPOINTS.tablet}px)`,
  laptop: `(min-width: ${BREAKPOINTS.laptop}px) and (max-width: ${BREAKPOINTS.desktop - 1}px)`,
  laptopUp: `(min-width: ${BREAKPOINTS.laptop}px)`,
  desktop: `(min-width: ${BREAKPOINTS.desktop}px)`,
  desktopLarge: `(min-width: ${BREAKPOINTS.desktopLarge}px)`,

  // Device-specific queries
  touch: "(hover: none) and (pointer: coarse)",
  hover: "(hover: hover) and (pointer: fine)",
  retina: "(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)",

  // Orientation queries
  landscape: "(orientation: landscape)",
  portrait: "(orientation: portrait)",

  // Combined queries for mobile landscape
  mobileLandscape: `(max-width: ${BREAKPOINTS.tablet}px) and (orientation: landscape)`,
  mobilePortrait: `(max-width: ${BREAKPOINTS.tablet}px) and (orientation: portrait)`,
} as const;

// Tailwind CSS screens configuration
export const TAILWIND_SCREENS = {
  xs: "375px", // Extra small for very small mobile devices
  sm: `${BREAKPOINTS.mobile}px`,
  md: `${BREAKPOINTS.tablet}px`,
  lg: `${BREAKPOINTS.laptop}px`,
  xl: `${BREAKPOINTS.desktop}px`,
  "2xl": `${BREAKPOINTS.desktopLarge}px`,
} as const;

// CSS custom properties for breakpoints
export const BREAKPOINT_CSS_VARS = Object.entries(BREAKPOINTS)
  .map(([key, value]) => `--breakpoint-${key}: ${value}px;`)
  .join("\n  ");

/**
 * Type definitions for better TypeScript support
 */
export type BreakpointKey = keyof typeof BREAKPOINTS;
export type MediaQueryKey = keyof typeof MEDIA_QUERIES;

/**
 * Utility functions for breakpoint operations
 */
export const BreakpointUtils = {
  /**
   * Get breakpoint value in pixels
   */
  getValue: (breakpoint: BreakpointKey): number => {
    return BREAKPOINTS[breakpoint];
  },

  /**
   * Get media query string
   */
  getMediaQuery: (query: MediaQueryKey): string => {
    return MEDIA_QUERIES[query];
  },

  /**
   * Check if current viewport matches breakpoint
   */
  matches: (breakpoint: BreakpointKey): boolean => {
    if (typeof window === "undefined") return false;
    return window.innerWidth >= BREAKPOINTS[breakpoint];
  },

  /**
   * Get current breakpoint based on viewport width
   */
  getCurrent: (): BreakpointKey => {
    if (typeof window === "undefined") return "desktop";

    const width = window.innerWidth;

    if (width < BREAKPOINTS.mobile) return "mobile";
    if (width < BREAKPOINTS.tablet) return "mobileLarge";
    if (width < BREAKPOINTS.laptop) return "tablet";
    if (width < BREAKPOINTS.desktop) return "laptop";
    if (width < BREAKPOINTS.desktopLarge) return "desktop";
    return "desktopLarge";
  },

  /**
   * Check if device is mobile (tablet and below)
   */
  isMobile: (): boolean => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < BREAKPOINTS.laptop;
  },

  /**
   * Check if device is tablet
   */
  isTablet: (): boolean => {
    if (typeof window === "undefined") return false;
    const width = window.innerWidth;
    return width >= BREAKPOINTS.tablet && width < BREAKPOINTS.laptop;
  },

  /**
   * Check if device is desktop
   */
  isDesktop: (): boolean => {
    if (typeof window === "undefined") return true;
    return window.innerWidth >= BREAKPOINTS.laptop;
  },

  /**
   * Generate CSS media query
   */
  createMediaQuery: (minWidth?: number, maxWidth?: number): string => {
    if (minWidth && maxWidth) {
      return `(min-width: ${minWidth}px) and (max-width: ${maxWidth}px)`;
    } else if (minWidth) {
      return `(min-width: ${minWidth}px)`;
    } else if (maxWidth) {
      return `(max-width: ${maxWidth}px)`;
    }
    return "";
  },

  /**
   * Get responsive image sizes attribute
   */
  getImageSizes: (breakpoints?: Partial<Record<BreakpointKey, string>>): string => {
    const defaultSizes = {
      mobile: "100vw",
      tablet: "50vw",
      laptop: "33vw",
      desktop: "25vw",
    };

    const sizes = { ...defaultSizes, ...breakpoints };

    return [
      `(max-width: ${BREAKPOINTS.tablet}px) ${sizes.mobile}`,
      `(max-width: ${BREAKPOINTS.laptop}px) ${sizes.tablet}`,
      `(max-width: ${BREAKPOINTS.desktop}px) ${sizes.laptop}`,
      sizes.desktop,
    ].join(", ");
  },
};

/**
 * React hook for responsive breakpoints
 */
export const useBreakpoint = () => {
  const [current, setCurrent] = React.useState<BreakpointKey>(() => {
    if (typeof window === "undefined") {
      return "desktop";
    }
    return BreakpointUtils.getCurrent();
  });

  React.useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handleResize = () => {
      setCurrent(BreakpointUtils.getCurrent());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (typeof window === "undefined") {
    return {
      current: "desktop" as BreakpointKey,
      isMobile: false,
      isTablet: false,
      isDesktop: true,
      matches: () => false,
    };
  }

  return {
    current,
    isMobile: BreakpointUtils.isMobile(),
    isTablet: BreakpointUtils.isTablet(),
    isDesktop: BreakpointUtils.isDesktop(),
    matches: BreakpointUtils.matches,
  };
};

/**
 * CSS-in-JS helper for media queries
 */
export const mediaQuery = (query: MediaQueryKey | string) => {
  const queryString = query in MEDIA_QUERIES ? MEDIA_QUERIES[query as MediaQueryKey] : query;

  return `@media ${queryString}`;
};

/**
 * Generate CSS custom properties for breakpoints
 */
export const generateBreakpointCSS = (): string => {
  return `:root {\n  ${BREAKPOINT_CSS_VARS}\n}`;
};

/**
 * Export for use in other configuration files
 */
export default {
  BREAKPOINTS,
  MEDIA_QUERIES,
  TAILWIND_SCREENS,
  BREAKPOINT_CSS_VARS,
  BreakpointUtils,
  useBreakpoint,
  mediaQuery,
  generateBreakpointCSS,
};
