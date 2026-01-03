"use client";

import { Briefcase, Home, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { DropdownMenu } from "@/components/ui/DropdownMenu";
import { useScrollDetection } from "@/hooks/useScrollDetection";

// Constants for consistent styling and behavior
const NAVBAR_HEIGHT = 80;
const SCROLL_THRESHOLD = 10;

// Reusable className patterns
const NAV_LINK_CLASSES =
  "inline-flex h-9 md:h-10 w-max items-center justify-center rounded-md bg-transparent px-2 md:px-3 lg:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap";
const MOBILE_NAV_LINK_CLASSES =
  "text-sm font-medium hover:text-primary transition-colors flex items-center py-1.5 px-1.5 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 min-h-[44px] no-underline";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const pathname = usePathname();

  // Use custom hook for scroll detection with hero intersection fallback
  const [heroElement, setHeroElement] = useState<Element | null>(null);

  // Find hero element after component mounts
  useEffect(() => {
    if (pathname === "/") {
      console.log("🔍 Hero Element Detection Started:", {
        timestamp: new Date().toISOString(),
        pathname: pathname,
        currentHeroElement: heroElement,
        documentReadyState: document.readyState,
      });

      const findHeroElement = () => {
        const element = document.querySelector(".hero-container");
        if (element) {
          console.log("✅ Hero Element Found:", {
            timestamp: new Date().toISOString(),
            element: element.className,
            rect: element.getBoundingClientRect(),
            computedStyle: window.getComputedStyle(element).position,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight,
            },
          });
          setHeroElement(element);
        } else {
          console.log("❌ Hero Element Not Found - Retrying...", {
            timestamp: new Date().toISOString(),
            existingElements: document.querySelectorAll('[class*="hero"]').length,
            bodyChildren: document.body.children.length,
          });
          // Retry after a short delay if hero element not found yet
          setTimeout(findHeroElement, 100);
        }
      };
      findHeroElement();
    }
  }, [pathname, heroElement]);

  // Use custom hook for scroll detection with hero intersection fallback
  const isScrolled = useScrollDetection({
    threshold: SCROLL_THRESHOLD,
    element: heroElement,
  });

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest(".dropdown-container")) {
        setAboutDropdownOpen(false);
        setCompanyDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle mobile menu accessibility with simplified logic
  useEffect(() => {
    const mobileMenu = document.getElementById("mobile-menu");
    const closeButton = document.getElementById("mobile-menu-close");
    const previouslyFocusedElement = document.activeElement as HTMLElement;
    let focusTrapHandler: ((e: KeyboardEvent) => void) | null = null;

    if (mobileMenuOpen) {
      // Prevent body scroll and manage focus
      document.body.classList.add("overflow-hidden");

      // Focus close button after menu opens
      if (closeButton) {
        setTimeout(() => closeButton.focus(), 100);
      }

      // Set ARIA attributes
      mobileMenu?.setAttribute("aria-hidden", "false");

      // Set up focus trap
      const focusableElements = mobileMenu?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ) as NodeListOf<HTMLElement>;

      if (focusableElements?.length > 0) {
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        focusTrapHandler = (e: KeyboardEvent) => {
          if (e.key !== "Tab") return;

          if (e.shiftKey) {
            // Shift + Tab: wrap to last element if on first
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            // Tab: wrap to first element if on last
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        };

        document.addEventListener("keydown", focusTrapHandler);
      }
    } else {
      // Restore body scroll and focus
      document.body.classList.remove("overflow-hidden");
      mobileMenu?.setAttribute("aria-hidden", "true");

      // Restore focus to previously focused element
      if (previouslyFocusedElement) {
        previouslyFocusedElement.focus();
      }
    }

    // Cleanup function
    return () => {
      document.body.classList.remove("overflow-hidden");
      if (focusTrapHandler) {
        document.removeEventListener("keydown", focusTrapHandler);
      }
    };
  }, [mobileMenuOpen]);

  // Handle navigation clicks - simplified for mobile menu
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string,
    targetId: string
  ) => {
    // Close mobile menu for all navigation types
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }

    // Only handle hash links that should scroll to sections on homepage
    if (path.startsWith("/#") && pathname === "/") {
      e.preventDefault();

      const element = document.getElementById(targetId);
      if (!element) return;

      // Use requestAnimationFrame to avoid forced reflow
      requestAnimationFrame(() => {
        // Scroll to element with navbar offset
        const targetPosition = element.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      });
    }
  };

  // Reorganized navigation items with grouping
  const mainNavItems = [
    { label: "Home", path: "/", id: "home", icon: <Home size={18} /> },
    { label: "Services", path: "/services", id: "services", icon: <Briefcase size={18} /> },
    { label: "Contact", path: "/contact", id: "contact", icon: <Phone size={18} /> },
  ];

  // About dropdown items with descriptions
  const aboutNavItems = [
    {
      label: "About Us",
      path: "/about",
      id: "about",
      description: "Learn about our company and mission",
    },
    {
      label: "Our Approach",
      path: "/approach",
      id: "approach",
      description: "Discover our security methodology",
    },
    {
      label: "Testimonials",
      path: "/testimonials",
      id: "testimonials",
      description: "See what our clients say about us",
    },
  ];

  // Company dropdown items
  const companyNavItems = [
    { label: "Careers", path: "/careers", id: "careers" },
    { label: "Privacy Policy", path: "/privacy-policy", id: "privacy" },
    { label: "Terms of Service", path: "/terms-of-service", id: "terms" },
  ];

  // All items for mobile menu
  const allNavItems = [
    { heading: "Main", items: mainNavItems },
    { heading: "About", items: aboutNavItems },
    { heading: "Company", items: companyNavItems },
  ];

  // Determine if we're on the homepage (which has a dark hero section)
  const isHomePage = pathname === "/";

  // Navbar styling based on page type and scroll state
  // Homepage: starts completely transparent with white text, changes to white bg with dark text on scroll
  // Other pages: always white background with dark text
  const navbarBg = isScrolled || !isHomePage ? "bg-white shadow-sm py-3" : "bg-transparent py-5";
  const textColor = isScrolled || !isHomePage ? "text-foreground" : "text-white";

  // Debug logging for mobile navbar issue investigation
  useEffect(() => {
    if (isHomePage) {
      console.log("🔍 Navbar Debug - Mobile Issue Investigation:", {
        timestamp: new Date().toISOString(),
        isHomePage,
        isScrolled,
        heroElement: heroElement ? "found" : "not found",
        navbarBg,
        textColor,
        userAgent: navigator.userAgent,
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight,
        },
        location: pathname,
      });
    }
  }, [isScrolled, isHomePage, heroElement, navbarBg, textColor, pathname]);

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-visible ${navbarBg}`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between overflow-visible">
          {/* Logo */}
          <Link
            href="/"
            className={`text-xl font-bold tracking-tight flex items-center gap-2 whitespace-nowrap transition-colors duration-300 ${textColor}`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="text-blue-700 font-bold">JCR</span> ELITE PROTECTION
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Main nav items */}
            {mainNavItems.map(item => (
              <Link
                key={item.id}
                href={item.path}
                onClick={e => handleNavClick(e, item.path, item.id)}
                className={`${NAV_LINK_CLASSES} ${textColor}`}
              >
                <span className="flex items-center">
                  {item.icon && <span className="mr-1">{item.icon}</span>}
                  {item.label}
                </span>
              </Link>
            ))}

            {/* About dropdown */}
            <DropdownMenu
              label="About"
              items={aboutNavItems}
              isOpen={aboutDropdownOpen}
              onToggle={() => {
                setAboutDropdownOpen(!aboutDropdownOpen);
                setCompanyDropdownOpen(false);
              }}
              onClose={() => setAboutDropdownOpen(false)}
              textColor={textColor}
              position="right"
            />

            {/* Company dropdown */}
            <DropdownMenu
              label="Company"
              items={companyNavItems}
              isOpen={companyDropdownOpen}
              onToggle={() => {
                setCompanyDropdownOpen(!companyDropdownOpen);
                setAboutDropdownOpen(false);
              }}
              onClose={() => setCompanyDropdownOpen(false)}
              textColor={textColor}
              position="right"
            />
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
            className={`lg:hidden transition-colors duration-300 min-h-[44px] min-w-[44px] ${textColor}`}
          >
            <Menu size={24} />
          </Button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
      <div
        id="mobile-menu"
        className={`mobile-menu-overlay fixed inset-0 bg-black/70 backdrop-blur-sm z-50 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        aria-hidden={!mobileMenuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        aria-labelledby="mobile-menu-title"
        onClick={e => {
          // Close menu when clicking overlay (not content)
          if (e.target === e.currentTarget) {
            setMobileMenuOpen(false);
          }
        }}
        onKeyDown={e => {
          // Close menu when pressing Escape
          if (e.key === "Escape") {
            setMobileMenuOpen(false);
          }
        }}
        tabIndex={-1}
      >
        {/* Mobile menu content */}
        <div
          className={`mobile-menu-content h-full flex flex-col bg-white dark:bg-slate-900 w-full max-w-xs ml-auto transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Mobile menu header with close button */}
          <div className="mobile-menu-header flex items-center justify-between p-3 border-b min-h-[56px]">
            <Link
              href="/"
              className="text-sm font-bold text-foreground no-underline flex items-center gap-1 whitespace-nowrap"
              onClick={() => {
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              id="mobile-menu-title"
            >
              <span className="text-blue-700 font-bold">JCR</span>
              <span className="hidden xs:inline">ELITE PROTECTION</span>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="text-foreground min-h-[44px] min-w-[44px] flex items-center justify-center"
              id="mobile-menu-close"
            >
              <X size={20} />
            </Button>
          </div>

          {/* Mobile menu items - compressed for mobile screens */}
          <div className="mobile-menu-items flex-1 overflow-y-auto py-0.5 px-1">
            <nav className="flex flex-col space-y-0.5">
              {/* Main Section */}
              <div className="space-y-0">
                {allNavItems[0].items.map((item, idx) => (
                  <div key={`main-${idx}`} className="mobile-menu-item">
                    <Link
                      href={item.path}
                      className={`${MOBILE_NAV_LINK_CLASSES} min-h-[36px] py-1 px-1.5`}
                      onClick={e => {
                        handleNavClick(e, item.path, item.id);
                        setMobileMenuOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>

              {/* About Section */}
              <div className="space-y-0">
                <div className="text-xs uppercase text-gray-500 font-medium px-1.5 py-0.5">
                  About
                </div>
                {allNavItems[1].items.map((item, idx) => (
                  <div key={`about-${idx}`} className="mobile-menu-item">
                    <Link
                      href={item.path}
                      className={`${MOBILE_NAV_LINK_CLASSES} ml-1 min-h-[36px] py-1 px-1.5`}
                      onClick={e => {
                        handleNavClick(e, item.path, item.id);
                        setMobileMenuOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>

              {/* Company Section */}
              <div className="space-y-0">
                <div className="text-xs uppercase text-gray-500 font-medium px-1.5 py-0.5">
                  Company
                </div>
                {allNavItems[2].items.map((item, idx) => (
                  <div key={`company-${idx}`} className="mobile-menu-item">
                    <Link
                      href={item.path}
                      className={`${MOBILE_NAV_LINK_CLASSES} ml-1 min-h-[36px] py-1 px-1.5`}
                      onClick={e => {
                        handleNavClick(e, item.path, item.id);
                        setMobileMenuOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </nav>

            {/* Quick contact button - compressed */}
            <div className="mt-1 pt-1 border-t border-gray-100 px-1">
              <Button asChild className="w-full text-sm h-8" size="sm">
                <Link
                  href="/contact"
                  className="no-underline"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
