"use client";

import { motion } from "framer-motion";
import React from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-in" | "fade-in-right" | "fade-in-left" | "subtle-pulse";
  id?: string;
}

const animations = {
  "fade-in": {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
  },
  "fade-in-right": {
    initial: { opacity: 0, x: 20 },
    whileInView: { opacity: 1, x: 0 },
  },
  "fade-in-left": {
    initial: { opacity: 0, x: -20 },
    whileInView: { opacity: 1, x: 0 },
  },
  "subtle-pulse": {
    initial: { opacity: 0, scale: 0.98 },
    whileInView: {
      opacity: 1,
      scale: 1,
      transition: {
        scale: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        },
      },
    },
  },
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = "",
  delay = 0,
  animation = "fade-in",
  id,
}) => {
  const selectedAnimation = animations[animation];

  return (
    <motion.div
      id={id}
      className={className}
      initial={selectedAnimation.initial}
      whileInView={selectedAnimation.whileInView}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: 0.6,
        delay: delay / 1000, // framer-motion uses seconds
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
