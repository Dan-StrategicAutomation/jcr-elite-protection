/**
 * Web Vitals monitoring for Vercel Analytics
 * Tracks Core Web Vitals and sends them to analytics
 */

import type { Metric } from "web-vitals";

// Send metrics to analytics endpoint
function sendToAnalytics(metric: Metric) {
  // Send to Google Analytics if available
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", metric.name, {
      event_category: "Web Vitals",
      value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
      event_label: metric.id,
      non_interaction: true,
    });
  }

  // Send to Vercel Analytics if available
  if (typeof window !== "undefined" && (window as any).va) {
    (window as any).va("event", {
      name: metric.name,
      data: {
        value: metric.value,
        rating: metric.rating,
        delta: metric.delta,
        id: metric.id,
      },
    });
  }

  // Log to console in development
  if (import.meta.env.DEV) {
    console.log(`[Web Vitals] ${metric.name}:`, {
      value: metric.value,
      rating: metric.rating,
      delta: metric.delta,
    });
  }
}

// Initialize Web Vitals monitoring
export function initWebVitals() {
  if (typeof window === "undefined") return;

  // Dynamically import web-vitals to avoid bundling it in the main chunk
  import("web-vitals").then(({ onCLS, onFID, onFCP, onLCP, onTTFB, onINP }) => {
    // Core Web Vitals
    onCLS(sendToAnalytics); // Cumulative Layout Shift
    onFID(sendToAnalytics); // First Input Delay (deprecated, but still tracked)
    onLCP(sendToAnalytics); // Largest Contentful Paint
    onINP(sendToAnalytics); // Interaction to Next Paint (replaces FID)

    // Other important metrics
    onFCP(sendToAnalytics); // First Contentful Paint
    onTTFB(sendToAnalytics); // Time to First Byte
  });
}

// Performance observer for custom metrics
export function observePerformance() {
  if (typeof window === "undefined" || !("PerformanceObserver" in window)) return;

  try {
    // Observe long tasks (tasks that block the main thread for >50ms)
    const longTaskObserver = new PerformanceObserver(list => {
      for (const entry of list.getEntries()) {
        if (entry.duration > 50) {
          if (import.meta.env.DEV) {
            console.warn(`[Performance] Long task detected: ${entry.duration}ms`);
          }

          // Send to analytics
          if ((window as any).gtag) {
            (window as any).gtag("event", "long_task", {
              event_category: "Performance",
              value: Math.round(entry.duration),
              non_interaction: true,
            });
          }
        }
      }
    });

    if (PerformanceObserver.supportedEntryTypes?.includes("longtask")) {
      longTaskObserver.observe({ entryTypes: ["longtask"] });
    }

    // Observe layout shifts
    const layoutShiftObserver = new PerformanceObserver(list => {
      for (const entry of list.getEntries()) {
        if ((entry as any).hadRecentInput) continue; // Ignore shifts caused by user input

        const value = (entry as any).value;
        if (value > 0.1) {
          // Significant layout shift
          if (import.meta.env.DEV) {
            console.warn(`[Performance] Layout shift detected: ${value}`);
          }
        }
      }
    });

    if (PerformanceObserver.supportedEntryTypes?.includes("layout-shift")) {
      layoutShiftObserver.observe({ entryTypes: ["layout-shift"] });
    }
  } catch (error) {
    console.error("[Performance] Error setting up performance observers:", error);
  }
}

// Track page load performance
export function trackPageLoad() {
  if (typeof window === "undefined") return;

  window.addEventListener("load", () => {
    // Wait a bit for all metrics to be available
    setTimeout(() => {
      const perfData = window.performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      const connectTime = perfData.responseEnd - perfData.requestStart;
      const renderTime = perfData.domComplete - perfData.domLoading;

      if (import.meta.env.DEV) {
        console.log("[Performance] Page Load Metrics:", {
          pageLoadTime: `${pageLoadTime}ms`,
          connectTime: `${connectTime}ms`,
          renderTime: `${renderTime}ms`,
        });
      }

      // Send to analytics
      if ((window as any).gtag) {
        (window as any).gtag("event", "page_load", {
          event_category: "Performance",
          page_load_time: pageLoadTime,
          connect_time: connectTime,
          render_time: renderTime,
          non_interaction: true,
        });
      }
    }, 0);
  });
}
