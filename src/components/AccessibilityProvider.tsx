"use client";

import React, { useEffect, useState } from "react";

import { AccessibilityContext } from "@/contexts/AccessibilityContext";
import type { AccessibilityContextType } from "@/types/accessibility";

interface AccessibilityProviderProps {
  children: React.ReactNode;
}

/**
 * AccessibilityProvider component for managing accessibility preferences
 * Implements WCAG 2.2 AA compliance features
 */
export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({ children }) => {
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState<"normal" | "large" | "extra-large">("normal");
  const [enhancedLinks, setEnhancedLinks] = useState(false);

  // Check for user's system preferences
  useEffect(() => {
    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Load saved preferences from localStorage
  useEffect(() => {
    const savedHighContrast = localStorage.getItem("accessibility-high-contrast");
    const savedFontSize = localStorage.getItem("accessibility-font-size");
    const savedEnhancedLinks = localStorage.getItem("accessibility-enhanced-links");

    if (savedHighContrast === "true") {
      setHighContrast(true);
    }

    if (savedFontSize && ["normal", "large", "extra-large"].includes(savedFontSize)) {
      setFontSize(savedFontSize as "normal" | "large" | "extra-large");
    }

    if (savedEnhancedLinks === "true") {
      setEnhancedLinks(true);
    }
  }, []);

  // Apply accessibility classes to document
  useEffect(() => {
    const root = document.documentElement;

    // High contrast mode
    if (highContrast) {
      root.classList.add("high-contrast");
    } else {
      root.classList.remove("high-contrast");
    }

    // Reduced motion
    if (reducedMotion) {
      root.classList.add("reduced-motion");
    } else {
      root.classList.remove("reduced-motion");
    }

    // Enhanced links
    if (enhancedLinks) {
      root.classList.add("enhanced-links");
    } else {
      root.classList.remove("enhanced-links");
    }

    // Font size
    root.classList.remove("font-large", "font-extra-large");
    if (fontSize === "large") {
      root.classList.add("font-large");
    } else if (fontSize === "extra-large") {
      root.classList.add("font-extra-large");
    }
  }, [highContrast, reducedMotion, fontSize, enhancedLinks]);

  const toggleHighContrast = () => {
    const newValue = !highContrast;
    setHighContrast(newValue);
    localStorage.setItem("accessibility-high-contrast", newValue.toString());
  };

  const toggleReducedMotion = () => {
    const newValue = !reducedMotion;
    setReducedMotion(newValue);
    localStorage.setItem("accessibility-reduced-motion", newValue.toString());
  };

  const handleSetFontSize = (size: "normal" | "large" | "extra-large") => {
    setFontSize(size);
    localStorage.setItem("accessibility-font-size", size);
  };

  const toggleEnhancedLinks = () => {
    const newValue = !enhancedLinks;
    setEnhancedLinks(newValue);
    localStorage.setItem("accessibility-enhanced-links", newValue.toString());
  };

  const value: AccessibilityContextType = {
    highContrast,
    reducedMotion,
    fontSize,
    enhancedLinks,
    toggleHighContrast,
    toggleReducedMotion,
    setFontSize: handleSetFontSize,
    toggleEnhancedLinks,
  };

  return <AccessibilityContext.Provider value={value}>{children}</AccessibilityContext.Provider>;
};

export default AccessibilityProvider;
