import Link from "next/link";
import React from "react";

import AnimatedSection from "@/components/AnimatedSection";

const RelatedServices: React.FC = () => {
  return (
    <AnimatedSection className="bg-white rounded-xl shadow-sm p-8 md:p-12 mb-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        Services Led by Christopher Willoughby
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-lg mb-3">Hotel Security Assessment</h3>
          <p className="text-gray-600 mb-4">
            Comprehensive evaluation of hotel security systems, procedures, and vulnerabilities with
            actionable recommendations.
          </p>
          <Link
            href="/approach"
            className="text-blue-700 font-medium hover:underline inline-flex items-center"
            aria-label="Learn about our hotel security assessment approach and methodology"
          >
            Learn About Our Hotel Security Assessment Approach
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </Link>
        </div>

        <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-lg mb-3">Close Protection Officers</h3>
          <p className="text-gray-600 mb-4">
            Highly trained close protection specialists providing discreet personal security for
            VIPs, executives, and high-profile individuals.
          </p>
          <Link
            href="/approach"
            className="text-blue-700 font-medium hover:underline inline-flex items-center"
            aria-label="Learn about our close protection officers approach and methodology"
          >
            Learn About Our Close Protection Approach
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </Link>
        </div>

        <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-lg mb-3">VIP & Executive Protection</h3>
          <p className="text-gray-600 mb-4">
            Specialized security services for high-profile individuals staying at London's premier
            establishments.
          </p>
          <Link
            href="/approach"
            className="text-blue-700 font-medium hover:underline inline-flex items-center"
            aria-label="Learn about our VIP and executive protection approach and methodology"
          >
            Learn About Our VIP Protection Approach
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </Link>
        </div>

        <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-lg mb-3">Event Security Planning</h3>
          <p className="text-gray-600 mb-4">
            Strategic security management for high-profile events, conferences, and social
            gatherings in London.
          </p>
          <Link
            href="/approach"
            className="text-blue-700 font-medium hover:underline inline-flex items-center"
            aria-label="Learn about our event security planning approach and methodology"
          >
            Learn About Our Event Security Approach
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default RelatedServices;
