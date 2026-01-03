/**
 * Centralized CSS Variables System
 * Single source of truth for all CSS custom properties
 * Eliminates duplication across multiple files
 */

// Base color scheme (light mode)
export const BASE_COLORS = {
  background: "210 40% 98%",
  foreground: "222.2 84% 4.9%",
  card: "0 0% 100%",
  "card-foreground": "222.2 84% 4.9%",
  popover: "0 0% 100%",
  "popover-foreground": "222.2 84% 4.9%",
  primary: "221 83% 53%",
  "primary-foreground": "210 40% 98%",
  secondary: "210 40% 96.1%",
  "secondary-foreground": "222.2 47.4% 11.2%",
  muted: "210 40% 96.1%",
  "muted-foreground": "215.4 16.3% 46.9%",
  accent: "210 40% 96.1%",
  "accent-foreground": "222.2 47.4% 11.2%",
  destructive: "0 84.2% 60.2%",
  "destructive-foreground": "210 40% 98%",
  border: "214.3 31.8% 91.4%",
  input: "214.3 31.8% 91.4%",
  ring: "221 83% 53%",
} as const;

// High contrast mode colors (accessibility)
export const HIGH_CONTRAST_COLORS = {
  background: "0 0% 100%",
  foreground: "0 0% 0%",
  primary: "240 100% 50%",
  "primary-foreground": "0 0% 100%",
  secondary: "0 0% 20%",
  "secondary-foreground": "0 0% 100%",
  muted: "0 0% 90%",
  "muted-foreground": "0 0% 10%",
  accent: "240 100% 50%",
  "accent-foreground": "0 0% 100%",
  destructive: "0 100% 50%",
  "destructive-foreground": "0 0% 100%",
  border: "0 0% 20%",
  input: "0 0% 100%",
  ring: "240 100% 50%",
} as const;

// Dark mode colors (for future use)
export const DARK_COLORS = {
  background: "222.2 84% 4.9%",
  foreground: "210 40% 98%",
  card: "222.2 84% 4.9%",
  "card-foreground": "210 40% 98%",
  popover: "222.2 84% 4.9%",
  "popover-foreground": "210 40% 98%",
  primary: "217.2 91.2% 59.8%",
  "primary-foreground": "222.2 84% 4.9%",
  secondary: "217.2 32.6% 17.5%",
  "secondary-foreground": "210 40% 98%",
  muted: "217.2 32.6% 17.5%",
  "muted-foreground": "215 20.2% 65.1%",
  accent: "217.2 32.6% 17.5%",
  "accent-foreground": "210 40% 98%",
  destructive: "0 62.8% 30.6%",
  "destructive-foreground": "210 40% 98%",
  border: "217.2 32.6% 17.5%",
  input: "217.2 32.6% 17.5%",
  ring: "224.3 76.3% 94.1%",
} as const;

// Layout and spacing variables
export const LAYOUT_VARIABLES = {
  radius: "0.5rem",
  "mobile-padding": "1rem",
  "mobile-margin": "0.75rem",
  "touch-target-min": "44px",
  "touch-target-comfortable": "48px",
  "mobile-font-base": "16px",
  "mobile-line-height": "1.5",
  "safe-area-top": "env(safe-area-inset-top, 0)",
  "safe-area-bottom": "env(safe-area-inset-bottom, 0)",
  "safe-area-left": "env(safe-area-inset-left, 0)",
  "safe-area-right": "env(safe-area-inset-right, 0)",
} as const;

// Sidebar specific variables
export const SIDEBAR_VARIABLES = {
  "sidebar-background": "hsl(var(--background))",
  "sidebar-foreground": "hsl(var(--foreground))",
  "sidebar-primary": "hsl(var(--primary))",
  "sidebar-primary-foreground": "hsl(var(--primary-foreground))",
  "sidebar-accent": "hsl(var(--accent))",
  "sidebar-accent-foreground": "hsl(var(--accent-foreground))",
  "sidebar-border": "hsl(var(--border))",
  "sidebar-ring": "hsl(var(--ring))",
} as const;

// Combined variables for easy access
export const ALL_VARIABLES = {
  ...BASE_COLORS,
  ...LAYOUT_VARIABLES,
  ...SIDEBAR_VARIABLES,
} as const;

/**
 * Generate CSS custom properties string for a given color scheme
 */
export const generateCSSVariables = (
  colorScheme: typeof BASE_COLORS | typeof HIGH_CONTRAST_COLORS | typeof DARK_COLORS = BASE_COLORS
): string => {
  const allVars = { ...colorScheme, ...LAYOUT_VARIABLES, ...SIDEBAR_VARIABLES };

  return Object.entries(allVars)
    .map(([key, value]) => `    --${key}: ${value};`)
    .join("\n");
};

/**
 * Generate CSS custom properties for high contrast mode
 */
export const generateHighContrastCSS = (): string => {
  return generateCSSVariables(HIGH_CONTRAST_COLORS);
};

/**
 * Generate CSS custom properties for dark mode
 */
export const generateDarkModeCSS = (): string => {
  return generateCSSVariables(DARK_COLORS);
};

/**
 * Get a specific CSS variable value
 */
export const getCSSVariable = (name: keyof typeof ALL_VARIABLES): string => {
  return ALL_VARIABLES[name];
};

/**
 * Generate CSS root declaration with all variables
 */
export const generateRootCSS = (): string => {
  return `:root {\n${generateCSSVariables()}\n}`;
};

/**
 * Generate high contrast mode CSS class
 */
export const generateHighContrastClass = (): string => {
  return `.high-contrast {\n${generateHighContrastCSS()}\n}`;
};

/**
 * Generate dark mode CSS class
 */
export const generateDarkModeClass = (): string => {
  return `.dark {\n${generateDarkModeCSS()}\n}`;
};

/**
 * Type definitions for better TypeScript support
 */
export type ColorVariable = keyof typeof BASE_COLORS;
export type LayoutVariable = keyof typeof LAYOUT_VARIABLES;
export type SidebarVariable = keyof typeof SIDEBAR_VARIABLES;
export type CSSVariable = keyof typeof ALL_VARIABLES;

/**
 * Utility function to create CSS variable reference
 */
export const cssVar = (name: CSSVariable): string => `var(--${name})`;

/**
 * Utility function to create HSL color reference
 */
export const hslVar = (name: ColorVariable): string => `hsl(var(--${name}))`;

/**
 * Export for use in other files
 */
export default {
  BASE_COLORS,
  HIGH_CONTRAST_COLORS,
  DARK_COLORS,
  LAYOUT_VARIABLES,
  SIDEBAR_VARIABLES,
  ALL_VARIABLES,
  generateCSSVariables,
  generateHighContrastCSS,
  generateDarkModeCSS,
  generateRootCSS,
  generateHighContrastClass,
  generateDarkModeClass,
  getCSSVariable,
  cssVar,
  hslVar,
};
