"use client";

import { ArrowUp } from "lucide-react";
import Link from "next/link";
import React from "react";
import SEOAreaLinks from "./SEOAreaLinks";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="text-white">JCR&nbsp;ELITE PROTECTION</span>
            </h3>
            <p className="text-gray-400 mb-6 pr-4">
              Providing top-tier security solutions for businesses and organisations since 2022.
              Your safety and security is our highest priority.
            </p>
            <div className="mb-6">
              <p className="text-gray-400">
                <strong>Address:</strong> Riverbank House, 1 Putney Bridge Approach, London, SW6 3JD
              </p>
              <p className="text-gray-400">
                <strong>Phone:</strong> 02080874233
              </p>
            </div>
            <div className="flex space-x-4" role="list" aria-label="Social media links">
              <a
                href="https://www.facebook.com/jcreliteprotection"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-primary focus:bg-primary focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors duration-300 p-2 rounded-full"
                aria-label="Visit JCR Elite Protection on Facebook (opens in new window)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  role="img"
                  aria-hidden="true"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/jcreliteprotect"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-primary focus:bg-primary focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors duration-300 p-2 rounded-full"
                aria-label="Visit JCR Elite Protection on Twitter (opens in new window)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  role="img"
                  aria-hidden="true"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/jcr-elite-protection"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-primary focus:bg-primary focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors duration-300 p-2 rounded-full"
                aria-label="Visit JCR Elite Protection on LinkedIn (opens in new window)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  role="img"
                  aria-hidden="true"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/jcreliteprotection"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-primary focus:bg-primary focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors duration-300 p-2 rounded-full"
                aria-label="Visit JCR Elite Protection on Instagram (opens in new window)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  role="img"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/london-security-services"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  London Security Services
                </Link>
              </li>
              <li>
                <Link
                  href="/corporate-security-london"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Corporate Security
                </Link>
              </li>
              <li>
                <Link
                  href="/luxury-event-security-london"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Event Security
                </Link>
              </li>
              <li>
                <Link
                  href="/vip-protection-services"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Close Protection
                </Link>
              </li>
              <li>
                <Link
                  href="/residential-security-london"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Residential Security
                </Link>
              </li>
              <li>
                <Link
                  href="/commercial-security-london"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Commercial Security
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/approach"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Our Approach
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  News & Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/licensing"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            <div>© {new Date().getFullYear()} JCR ELITE PROTECTION. All rights reserved.</div>
            <div className="mt-2">
              Created by{" "}
              <a
                href="https://wemakesit.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-medium hover:underline"
              >
                WeMakesIt
              </a>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="bg-gray-800 p-3 rounded-full hover:bg-primary focus:bg-primary focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors duration-300"
            aria-label="Scroll to top of page"
          >
            <ArrowUp size={18} aria-hidden="true" />
          </button>
        </div>

        {/* Hidden SEO-optimized area links for search engines */}
        <SEOAreaLinks />
      </div>
    </footer>
  );
};

export default Footer;
