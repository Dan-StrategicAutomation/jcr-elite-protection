"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const ScrollToTop: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Use requestAnimationFrame for better performance and to avoid forced reflows
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant", // Use instant for page navigation, smooth for anchor links
      });
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
