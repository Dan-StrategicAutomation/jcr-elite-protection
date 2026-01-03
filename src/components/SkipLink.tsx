import React from "react";

/**
 * SkipLink component for keyboard navigation accessibility
 * Allows users to skip to main content, complying with WCAG 2.2 AA
 */
const SkipLink: React.FC = () => {
  return (
    <a href="#main-content" className="skip-link">
      Skip to main content
    </a>
  );
};

export default SkipLink;
