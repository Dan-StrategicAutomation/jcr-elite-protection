import { createContext } from "react";

import type { AccessibilityContextType } from "@/types/accessibility";

export const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);
