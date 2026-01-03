"use client";

import { Eye, Link, Settings, Type, X } from "lucide-react";
import React, { useState } from "react";

import { useAccessibility } from "@/hooks/useAccessibility";

/**
 * AccessibilityToolbar component for WCAG 2.2 AA compliance
 * Provides users with accessibility controls
 */
const AccessibilityToolbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    highContrast,
    reducedMotion,
    fontSize,
    enhancedLinks,
    toggleHighContrast,
    toggleReducedMotion,
    setFontSize,
    toggleEnhancedLinks,
  } = useAccessibility();

  return (
    <>
      {/* Accessibility trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 bg-primary text-primary-foreground p-2 rounded-full shadow-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 min-h-[40px] min-w-[40px] flex items-center justify-center"
        aria-label={isOpen ? "Close accessibility options" : "Open accessibility options"}
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
      >
        {isOpen ? <X size={24} /> : <Settings size={24} />}
      </button>

      {/* Accessibility panel */}
      {isOpen && (
        <div
          id="accessibility-panel"
          className="fixed bottom-20 right-4 z-40 bg-white border border-gray-200 rounded-lg shadow-xl p-6 w-80 max-w-[calc(100vw-2rem)]"
          role="dialog"
          aria-labelledby="accessibility-title"
          aria-modal="false"
        >
          <h2 id="accessibility-title" className="text-lg font-semibold mb-4 flex items-center">
            <Eye className="mr-2" size={20} />
            Accessibility Options
          </h2>

          <div className="space-y-4">
            {/* High Contrast Toggle */}
            <div className="flex items-center justify-between">
              <label htmlFor="high-contrast" className="text-sm font-medium">
                High Contrast Mode
              </label>
              <button
                id="high-contrast"
                onClick={toggleHighContrast}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  highContrast ? "bg-primary" : "bg-gray-200"
                }`}
                role="switch"
                aria-checked={highContrast}
                aria-describedby="high-contrast-desc"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    highContrast ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
            <p id="high-contrast-desc" className="text-xs text-gray-600">
              Increases contrast for better visibility
            </p>

            {/* Reduced Motion Toggle */}
            <div className="flex items-center justify-between">
              <label htmlFor="reduced-motion" className="text-sm font-medium">
                Reduce Motion
              </label>
              <button
                id="reduced-motion"
                onClick={toggleReducedMotion}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  reducedMotion ? "bg-primary" : "bg-gray-200"
                }`}
                role="switch"
                aria-checked={reducedMotion}
                aria-describedby="reduced-motion-desc"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    reducedMotion ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
            <p id="reduced-motion-desc" className="text-xs text-gray-600">
              Minimizes animations and transitions
            </p>

            {/* Enhanced Links Toggle */}
            <div className="flex items-center justify-between">
              <label htmlFor="enhanced-links" className="text-sm font-medium flex items-center">
                <Link className="mr-2" size={16} />
                Enhanced Links
              </label>
              <button
                id="enhanced-links"
                onClick={toggleEnhancedLinks}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  enhancedLinks ? "bg-primary" : "bg-gray-200"
                }`}
                role="switch"
                aria-checked={enhancedLinks}
                aria-describedby="enhanced-links-desc"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    enhancedLinks ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
            <p id="enhanced-links-desc" className="text-xs text-gray-600">
              Adds underlines to all links for better visibility
            </p>

            {/* Font Size Controls */}
            <fieldset>
              <legend className="text-sm font-medium mb-2 flex items-center">
                <Type className="mr-2" size={16} />
                Text Size
              </legend>
              <div
                className="grid grid-cols-3 gap-2"
                role="group"
                aria-labelledby="font-size-legend"
              >
                <button
                  onClick={() => setFontSize("normal")}
                  className={`px-3 py-2 text-xs rounded border transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 ${
                    fontSize === "normal"
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-white border-gray-300 hover:bg-gray-50"
                  }`}
                  aria-pressed={fontSize === "normal"}
                >
                  Normal
                </button>
                <button
                  onClick={() => setFontSize("large")}
                  className={`px-3 py-2 text-sm rounded border transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 ${
                    fontSize === "large"
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-white border-gray-300 hover:bg-gray-50"
                  }`}
                  aria-pressed={fontSize === "large"}
                >
                  Large
                </button>
                <button
                  onClick={() => setFontSize("extra-large")}
                  className={`px-3 py-2 text-base rounded border transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 ${
                    fontSize === "extra-large"
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-white border-gray-300 hover:bg-gray-50"
                  }`}
                  aria-pressed={fontSize === "extra-large"}
                >
                  X-Large
                </button>
              </div>
            </fieldset>

            {/* Reset Button */}
            <button
              onClick={() => {
                if (highContrast) toggleHighContrast();
                if (reducedMotion) toggleReducedMotion();
                if (enhancedLinks) toggleEnhancedLinks();
                setFontSize("normal");
              }}
              className="w-full mt-4 px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded border border-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Reset to Defaults
            </button>
          </div>

          {/* Close button for keyboard users */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
            aria-label="Close accessibility options"
          >
            <X size={16} />
          </button>
        </div>
      )}

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-25 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default AccessibilityToolbar;
