export interface AccessibilityContextType {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: "normal" | "large" | "extra-large";
  enhancedLinks: boolean;
  toggleHighContrast: () => void;
  toggleReducedMotion: () => void;
  setFontSize: (size: "normal" | "large" | "extra-large") => void;
  toggleEnhancedLinks: () => void;
}
