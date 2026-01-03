"use client";

import React, { useEffect, useState } from "react";

import { getDeviceType, isTouchDevice, TOUCH_TARGETS } from "@/utils/mobileOptimization";

interface UXTestResult {
  test: string;
  status: "pass" | "fail" | "warning";
  message: string;
  recommendation?: string;
}

/**
 * MobileUXTester component for validating mobile user experience
 * Only renders in development mode for testing purposes
 */
const MobileUXTester: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [testResults, setTestResults] = useState<UXTestResult[]>([]);
  const [deviceInfo, setDeviceInfo] = useState({
    type: "desktop" as ReturnType<typeof getDeviceType>,
    isTouch: false,
    viewport: { width: 0, height: 0 },
    userAgent: "",
  });

  // Only show in development mode
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      setIsVisible(true);
    }
  }, []);
  // Smooth fade-in to avoid any perceived shift in dev
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  // Gather device information
  useEffect(() => {
    const updateDeviceInfo = () => {
      setDeviceInfo({
        type: getDeviceType(),
        isTouch: isTouchDevice(),
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight,
        },
        userAgent: navigator.userAgent,
      });
    };

    updateDeviceInfo();
    window.addEventListener("resize", updateDeviceInfo);
    return () => window.removeEventListener("resize", updateDeviceInfo);
  }, []);

  // Run UX tests
  useEffect(() => {
    const runTests = () => {
      const results: UXTestResult[] = [];

      // Test 1: Touch target sizes
      const interactiveElements = document.querySelectorAll(
        'button, a, input[type="button"], input[type="submit"], [role="button"]'
      );
      let touchTargetIssues = 0;

      // Separate DOM reads from processing to avoid forced reflows
      const elementsWithIssues: Element[] = [];

      interactiveElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.width < TOUCH_TARGETS.minimum || rect.height < TOUCH_TARGETS.minimum) {
          elementsWithIssues.push(element);
        }
      });

      // Process results after all DOM reads are complete
      touchTargetIssues = elementsWithIssues.length;

      results.push({
        test: "Touch Target Sizes",
        status: touchTargetIssues === 0 ? "pass" : touchTargetIssues < 5 ? "warning" : "fail",
        message: `${interactiveElements.length - touchTargetIssues}/${interactiveElements.length} elements meet minimum touch target size`,
        recommendation:
          touchTargetIssues > 0
            ? "Increase size of small interactive elements to at least 44px"
            : undefined,
      });

      // Test 2: Viewport configuration
      const viewportMeta = document.querySelector('meta[name="viewport"]');
      const hasViewport = viewportMeta !== null;
      const viewportContent = viewportMeta?.getAttribute("content") || "";

      results.push({
        test: "Viewport Configuration",
        status: hasViewport && viewportContent.includes("width=device-width") ? "pass" : "fail",
        message: hasViewport
          ? `Viewport meta tag present: ${viewportContent}`
          : "No viewport meta tag found",
        recommendation: !hasViewport ? "Add viewport meta tag with width=device-width" : undefined,
      });

      // Test 3: Mobile navigation
      const mobileMenuButton = document.querySelector(
        '[aria-label*="menu" i], .mobile-menu-button'
      );
      const hasMobileNav = mobileMenuButton !== null;

      results.push({
        test: "Mobile Navigation",
        status: hasMobileNav ? "pass" : "warning",
        message: hasMobileNav ? "Mobile navigation detected" : "No mobile navigation found",
        recommendation: !hasMobileNav ? "Consider adding mobile-specific navigation" : undefined,
      });

      // Test 4: Font size optimization
      const bodyFontSize = window.getComputedStyle(document.body).fontSize;
      const fontSize = parseInt(bodyFontSize);

      results.push({
        test: "Font Size (Mobile)",
        status: fontSize >= 16 ? "pass" : "warning",
        message: `Base font size: ${fontSize}px`,
        recommendation:
          fontSize < 16 ? "Consider using 16px+ base font size to prevent zoom on iOS" : undefined,
      });

      // Test 5: Image optimization
      const images = document.querySelectorAll("img");
      let optimizedImages = 0;

      images.forEach(img => {
        if (img.loading === "lazy" || img.getAttribute("loading") === "lazy") {
          optimizedImages++;
        }
      });

      results.push({
        test: "Image Optimization",
        status: optimizedImages / images.length > 0.8 ? "pass" : "warning",
        message: `${optimizedImages}/${images.length} images have lazy loading`,
        recommendation:
          optimizedImages / images.length <= 0.8 ? "Add lazy loading to more images" : undefined,
      });

      // Test 6: Performance indicators
      const hasServiceWorker = "serviceWorker" in navigator;

      results.push({
        test: "Performance Features",
        status: hasServiceWorker ? "pass" : "warning",
        message: hasServiceWorker
          ? "Service Worker support detected"
          : "No Service Worker detected",
        recommendation: !hasServiceWorker
          ? "Consider implementing Service Worker for better performance"
          : undefined,
      });

      setTestResults(results);
    };

    // Run tests after a short delay to ensure DOM is ready
    const timer = setTimeout(runTests, 1000);
    return () => clearTimeout(timer);
  }, [deviceInfo]);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-4 left-4 z-50 bg-white border border-gray-300 rounded-lg shadow-lg p-4 max-w-sm max-h-96 overflow-y-auto transition-opacity duration-200 ${mounted ? "opacity-100" : "opacity-0"}`}
    >
      <div className="mb-3">
        <h3 className="font-semibold text-sm mb-2">Mobile UX Test Results</h3>
        <div className="text-xs text-gray-600 mb-2">
          <div>
            Device: {deviceInfo.type} {deviceInfo.isTouch ? "(Touch)" : "(No Touch)"}
          </div>
          <div>
            Viewport: {deviceInfo.viewport.width}×{deviceInfo.viewport.height}
          </div>
        </div>
      </div>

      <div className="space-y-2">
        {testResults.map((result, index) => (
          <div key={index} className="border-b border-gray-100 pb-2 last:border-b-0">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-medium">{result.test}</span>
              <span
                className={`text-xs px-2 py-1 rounded ${
                  result.status === "pass"
                    ? "bg-green-100 text-green-800"
                    : result.status === "warning"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                }`}
              >
                {result.status.toUpperCase()}
              </span>
            </div>
            <div className="text-xs text-gray-600 mb-1">{result.message}</div>
            {result.recommendation && (
              <div className="text-xs text-blue-600 italic">{result.recommendation}</div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-3 pt-2 border-t border-gray-200">
        <button
          onClick={() => setIsVisible(false)}
          className="text-xs text-gray-500 hover:text-gray-700"
        >
          Hide UX Tester
        </button>
      </div>
    </div>
  );
};

export default MobileUXTester;
