/**
 * CSS Optimization utilities for better performance
 * Handles critical CSS loading and deferred non-critical CSS
 */

// Critical CSS that must be loaded immediately for above-the-fold content
export const criticalCSS = `
  /* CSS Variables */
  :root {
    --background: 210 40% 98%;
    --foreground: 222.2 84% 4.9%;
    --primary: 221 83% 53%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 221 83% 53%;
    --radius: 0.5rem;
  }

  /* Reset and base styles */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
  }

  body {
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.5;
  }

  /* Critical layout utilities */
  .min-h-screen { min-height: 100vh; }
  .relative { position: relative; }
  .absolute { position: absolute; }
  .fixed { position: fixed; }
  .inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
  .top-0 { top: 0; }
  .left-0 { left: 0; }
  .right-0 { right: 0; }
  .z-10 { z-index: 10; }
  .z-50 { z-index: 50; }
  .flex { display: flex; }
  .items-center { align-items: center; }
  .justify-center { justify-content: center; }
  .text-center { text-align: center; }
  .overflow-hidden { overflow: hidden; }
  .overflow-x-hidden { overflow-x: hidden; }

  /* Critical typography */
  .text-white { color: rgb(255 255 255); }
  .text-primary { color: hsl(var(--primary)); }
  .text-muted-foreground { color: hsl(var(--muted-foreground)); }
  .font-bold { font-weight: 700; }
  .font-semibold { font-weight: 600; }
  .font-medium { font-weight: 500; }
  .text-sm { font-size: 0.875rem; line-height: 1.25rem; }
  .text-lg { font-size: 1.125rem; line-height: 1.75rem; }
  .text-xl { font-size: 1.25rem; line-height: 1.75rem; }
  .text-2xl { font-size: 1.5rem; line-height: 2rem; }
  .text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
  .text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
  .text-5xl { font-size: 3rem; line-height: 1; }
  .text-6xl { font-size: 3.75rem; line-height: 1; }

  /* Critical spacing */
  .mb-2 { margin-bottom: 0.5rem; }
  .mb-4 { margin-bottom: 1rem; }
  .mb-6 { margin-bottom: 1.5rem; }
  .mb-8 { margin-bottom: 2rem; }
  .mt-2 { margin-top: 0.5rem; }
  .mt-6 { margin-top: 1.5rem; }
  .mt-10 { margin-top: 2.5rem; }
  .px-4 { padding-left: 1rem; padding-right: 1rem; }
  .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
  .py-1 { padding-top: 0.25rem; padding-bottom: 0.25rem; }
  .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
  .py-20 { padding-top: 5rem; padding-bottom: 5rem; }
  .p-3 { padding: 0.75rem; }

  /* Critical backgrounds and colors */
  .bg-white { background-color: rgb(255 255 255); }
  .bg-primary { background-color: hsl(var(--primary)); }
  .bg-gray-50 { background-color: rgb(249 250 251); }
  .bg-white\\/10 { background-color: rgb(255 255 255 / 0.1); }

  /* Critical borders and shadows */
  .rounded-md { border-radius: 0.375rem; }
  .rounded-lg { border-radius: 0.5rem; }
  .rounded-full { border-radius: 9999px; }
  .shadow-md { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); }
  .shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
  .backdrop-blur-md { backdrop-filter: blur(12px); }
  .backdrop-blur-sm { backdrop-filter: blur(4px); }

  /* Critical transitions */
  .transition-all { transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
  .transition-colors { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
  .duration-300 { transition-duration: 300ms; }

  /* Critical button styles */
  .button-primary {
    background-color: hsl(var(--primary));
    color: hsl(var(--primary-foreground));
    padding: 0.75rem 1.5rem;
    border-radius: 0.375rem;
    font-weight: 500;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
  }

  .button-primary:hover {
    background-color: hsl(var(--primary) / 0.9);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }

  /* Critical navigation styles */
  .nav-link {
    position: relative;
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: hsl(var(--foreground));
    transition: color 0.3s ease;
    text-decoration: none;
  }

  .nav-link:hover {
    color: hsl(var(--primary));
  }

  /* Hero background optimization */
  .hero-background {
    background-image: url('/assets/hero-bg.webp');
    background-position: center;
  }

  /* Progress indicator optimization */
  [data-progress-indicator] {
    transform: translateX(calc(-100% + var(--progress-value, 0%)));
  }

  /* Overflow utilities */
  .overflow-visible {
    overflow: visible;
  }

  /* Hide non-critical elements initially */
  .animate-on-scroll {
    opacity: 0;
  }

  /* Critical responsive design */
  @media (min-width: 640px) {
    .sm\\:px-8 { padding-left: 2rem; padding-right: 2rem; }
    .sm\\:w-auto { width: auto; }
    .sm\\:flex-row { flex-direction: row; }
  }

  @media (min-width: 768px) {
    .md\\:text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
    .md\\:text-5xl { font-size: 3rem; line-height: 1; }
    .md\\:px-12 { padding-left: 3rem; padding-right: 3rem; }
  }

  @media (min-width: 1024px) {
    .lg\\:text-5xl { font-size: 3rem; line-height: 1; }
    .lg\\:text-6xl { font-size: 3.75rem; line-height: 1; }
  }

  /* Critical accessibility styles */
  *:focus {
    outline: 2px solid hsl(var(--primary));
    outline-offset: 2px;
  }

  *:focus:not(:focus-visible) {
    outline: none;
  }

  *:focus-visible {
    outline: 2px solid hsl(var(--primary));
    outline-offset: 2px;
  }

  /* Skip link */
  .skip-link {
    position: absolute;
    top: -100px;
    left: 6px;
    background: hsl(var(--primary));
    color: hsl(var(--primary-foreground));
    padding: 8px;
    text-decoration: none;
    border-radius: 4px;
    z-index: 1000;
    font-weight: 600;
    opacity: 0;
    transform: translateY(-20px);
    transition: all 0.3s ease;
  }

  .skip-link:focus {
    top: 6px;
    opacity: 1;
    transform: translateY(0);
  }
`;

/**
 * Load CSS asynchronously to prevent render blocking
 */
export const loadCSSAsync = (href: string, media = "all"): Promise<void> => {
  return new Promise((resolve, reject) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    link.media = "print"; // Load as print first to avoid blocking

    link.onload = () => {
      link.media = media; // Switch to target media after load
      resolve();
    };

    link.onerror = () => {
      reject(new Error(`Failed to load CSS: ${href}`));
    };

    // Fallback for older browsers
    setTimeout(() => {
      link.media = media;
      resolve();
    }, 3000);

    document.head.appendChild(link);
  });
};

/**
 * Inject critical CSS into the document head
 */
export const injectCriticalCSS = (): void => {
  const style = document.createElement("style");
  style.textContent = criticalCSS;
  style.setAttribute("data-critical", "true");
  document.head.appendChild(style);
};

/**
 * Preload CSS files for faster loading
 */
export const preloadCSS = (href: string): void => {
  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "style";
  link.href = href;
  document.head.appendChild(link);
};
