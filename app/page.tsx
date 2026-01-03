"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { lazy, Suspense, useEffect } from "react";

import Hero from "@/components/Hero";
import LazyFooter from "@/components/LazyFooter";
import Navbar from "@/components/Navbar";

// Lazy load non-critical sections
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const TrustedBySection = lazy(() => import("@/components/TrustedBySection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));

// Loading fallback
const SectionLoading = () => (
  <div className="py-20 flex items-center justify-center">
    <div className="animate-pulse flex space-x-4">
      <div className="h-12 w-12 bg-slate-200 rounded-full"></div>
      <div className="space-y-4 flex-1 max-w-md">
        <div className="h-4 bg-slate-200 rounded w-3/4"></div>
        <div className="h-4 bg-slate-200 rounded"></div>
        <div className="h-4 bg-slate-200 rounded w-5/6"></div>
      </div>
    </div>
  </div>
);

const HashScrollHandler = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // Handle hash navigation
  useEffect(() => {
    const hash = window.location.hash;

    if (!hash && pathname === "/") {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }

    if (hash) {
      const targetId = hash.substring(1);
      const scrollToElement = () => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          requestAnimationFrame(() => {
            const navbarHeight = 80;
            const targetPosition =
              targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
            window.scrollTo({ top: targetPosition, behavior: "smooth" });
          });
        } else {
          setTimeout(scrollToElement, 500);
        }
      };
      setTimeout(scrollToElement, 100);
    }
  }, [pathname, searchParams]);

  return null;
};

const Index = () => {
  // Initialize scroll animations
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      const elementsToAnimate: Element[] = [];

      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
          elementsToAnimate.push(element);
        }
      });

      requestAnimationFrame(() => {
        elementsToAnimate.forEach(element => {
          element.classList.add("animated");
        });
      });
    };

    const initialCheck = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      const elementsToAnimate: Element[] = [];

      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

        if (isInViewport) {
          elementsToAnimate.push(element);
        }
      });

      requestAnimationFrame(() => {
        elementsToAnimate.forEach(element => {
          element.classList.add("animated");
        });
        animateOnScroll();
      });
    };

    initialCheck();
    setTimeout(initialCheck, 100);

    window.addEventListener("scroll", animateOnScroll);
    return () => window.removeEventListener("scroll", animateOnScroll);
  }, []);

  return (
    <>
      <Navbar />
      <Suspense fallback={null}>
        <HashScrollHandler />
      </Suspense>
      <main id="main-content" className="min-h-screen md:min-h-screen-mobile overflow-x-hidden">
        <Hero />
        <Suspense fallback={<SectionLoading />}>
          <ServicesSection />
        </Suspense>
        <Suspense fallback={<SectionLoading />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<SectionLoading />}>
          <TrustedBySection />
        </Suspense>
        <Suspense fallback={<SectionLoading />}>
          <TestimonialsSection />
        </Suspense>
        <LazyFooter />
      </main>
    </>
  );
};

export default Index;
