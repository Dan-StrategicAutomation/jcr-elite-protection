"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const Hero: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Check if image is already loaded (from preload) or load it
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => {
      // If image fails to load, still show the content with gradient background
      setImageLoaded(true);
    };
    img.src = "/assets/hero-bg.webp";

    // If image is already cached, it will load immediately
    if (img.complete) {
      setImageLoaded(true);
    }
  }, []);

  // Fix mobile viewport height issues
  useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    // Set initial value
    setVH();

    // Update on resize and orientation change
    window.addEventListener("resize", setVH);
    window.addEventListener("orientationchange", setVH);

    return () => {
      window.removeEventListener("resize", setVH);
      window.removeEventListener("orientationchange", setVH);
    };
  }, []);

  return (
    <div className="hero-container relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay - optimized for LCP and mobile coverage */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-slate-900/90 to-slate-800/90">
        <div
          className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat mix-blend-overlay hero-background transition-opacity duration-300 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        ></div>
      </div>

      {/* Content - Optimized for LCP and Mobile */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-20 sm:py-24 text-center flex flex-col justify-center h-full">
        <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
          <div className="inline-block mb-2 sm:mb-4">
            <span className="bg-primary/10 text-primary px-2 sm:px-3 md:px-4 lg:px-5 py-1 sm:py-1.5 md:py-2 rounded-full text-xs sm:text-sm md:text-base font-medium tracking-wide">
              Elite British Security
            </span>
          </div>

          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight leading-tight">
            <span className="block">London's Elite Protection</span>
            <span className="text-primary block">Specialists</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mt-4 font-medium">
            Professional security company providing comprehensive London security services
          </p>

          <p className="hero-lcp-element text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto mt-4 sm:mt-6 leading-relaxed px-2 sm:px-0">
            Professional London security services including event security, corporate protection,
            and hotel security with elite SIA-licensed British-trained personnel available 24/7
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 lg:mt-10 px-4 sm:px-0">
            <Link
              href="/contact"
              className="button-primary w-full sm:w-auto min-h-[44px] px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
              aria-label="Request a security consultation"
            >
              Request Consultation
            </Link>
            <Link
              href="/approach"
              className="bg-white/10 backdrop-blur-sm text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-md font-medium border border-white/20 hover:bg-white/20 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary transition-all duration-300 w-full sm:w-auto min-h-[44px] text-sm sm:text-base"
              aria-label="Learn about our security approach and methodology"
            >
              Discover Our Approach
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 flex justify-center z-10 pb-safe">
        <div className="animate-bounce p-2">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white drop-shadow-lg"
            aria-hidden="true"
          >
            <path
              d="M12 5L12 19M12 19L5 12M12 19L19 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Floating call button */}
      <a
        href="tel:+442080874233"
        className="fixed bottom-6 left-6 bg-primary hover:bg-primary/90 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary z-50 min-h-[56px] min-w-[56px] flex items-center justify-center"
        aria-label="Call JCR Elite Protection now at 020 8087 4233"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      </a>
    </div>
  );
};

export default Hero;
