import React, { Suspense, lazy } from "react";

// In Next.js, we can still use React.lazy, but Next.js also has next/dynamic.
// For a simple transition, keeping React.lazy is fine for client components.
const Footer = lazy(() => import("@/components/Footer"));

const FooterLoading = () => (
  <div className="bg-gray-900 py-16">
    <div className="max-w-7xl mx-auto px-6 sm:px-8">
      <div className="animate-pulse">
        <div className="h-6 bg-gray-800 rounded w-1/4 mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="h-4 bg-gray-800 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-800 rounded w-full mb-4"></div>
            <div className="h-4 bg-gray-800 rounded w-5/6 mb-4"></div>
          </div>
          <div>
            <div className="h-4 bg-gray-800 rounded w-1/2 mb-4"></div>
            <div className="h-4 bg-gray-800 rounded w-2/3 mb-4"></div>
            <div className="h-4 bg-gray-800 rounded w-1/2 mb-4"></div>
          </div>
          <div>
            <div className="h-4 bg-gray-800 rounded w-1/2 mb-4"></div>
            <div className="h-4 bg-gray-800 rounded w-2/3 mb-4"></div>
            <div className="h-4 bg-gray-800 rounded w-1/2 mb-4"></div>
          </div>
          <div>
            <div className="h-4 bg-gray-800 rounded w-1/2 mb-4"></div>
            <div className="h-4 bg-gray-800 rounded w-2/3 mb-4"></div>
            <div className="h-4 bg-gray-800 rounded w-1/2 mb-4"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const LazyFooter: React.FC = () => {
  return (
    <Suspense fallback={<FooterLoading />}>
      <Footer />
    </Suspense>
  );
};

export default LazyFooter;
