import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React from "react";

interface DropdownItem {
  label: string;
  path: string;
  id: string;
  description?: string;
}

interface DropdownMenuProps {
  label: string;
  items: DropdownItem[];
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  className?: string;
  textColor: string;
  position?: "left" | "right" | "center";
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  label,
  items,
  isOpen,
  onToggle,
  onClose,
  className = "",
  textColor,
  position = "right",
}) => {
  const handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string, id: string) => {
    // Call the parent's navigation handler if provided
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className={`relative dropdown-container ${className}`}>
      <button
        onClick={onToggle}
        className={`inline-flex h-9 md:h-10 w-max items-center justify-center rounded-md bg-transparent px-2 md:px-3 lg:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none whitespace-nowrap ${textColor}`}
        aria-label={`${label} menu`}
        aria-expanded={isOpen}
      >
        <span className="flex items-center">
          {label}{" "}
          <ChevronDown
            className={`ml-1 h-3 w-3 transition duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </span>
      </button>

      {isOpen && (
        <div
          className={`absolute top-full mt-1 w-[220px] max-w-[90vw] rounded-md border bg-popover p-4 text-popover-foreground shadow-lg z-50 ${
            position === "right"
              ? "right-0"
              : position === "left"
                ? "left-0"
                : "left-1/2 transform -translate-x-1/2"
          }`}
        >
          <div className="flex flex-col gap-3">
            {items.map(item => (
              <Link
                key={item.id}
                href={item.path}
                onClick={e => handleItemClick(e, item.path, item.id)}
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                <div className="text-sm font-medium leading-none">{item.label}</div>
                {item.description && (
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                    {item.description}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
