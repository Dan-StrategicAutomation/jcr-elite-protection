import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  displayWidth?: number;
  displayHeight?: number;
  sizes?: string;
}

/**
 * OptimizedImage component using Next.js Image for performance
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  displayWidth,
  displayHeight,
  className,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}) => {
  // Use display dimensions if provided, otherwise fallback to width/height
  const finalWidth = displayWidth || width || 800;
  const finalHeight = displayHeight || height || 600;

  // Handle Unsplash images - Next.js handles optimization if configured in next.config.ts
  // We can simplify and just use next/image
  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ width: displayWidth, height: displayHeight }}
    >
      <Image
        src={src}
        alt={alt}
        width={finalWidth}
        height={finalHeight}
        priority={priority}
        sizes={sizes}
        className="object-cover w-full h-full"
      />
    </div>
  );
};

// PreloadImage is largely unnecessary with Next.js's priority prop,
// but we keep a dummy one for compatibility if needed.
const PreloadImage: React.FC<{ src: string }> = () => null;

export { OptimizedImage, PreloadImage };
