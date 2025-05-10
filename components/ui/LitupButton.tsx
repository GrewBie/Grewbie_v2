import React from "react";
import { cn } from "@/lib/utils"; // Optional utility function for class merging

type ButtonProps = {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  className?: string;
};

const LitupButton: React.FC<ButtonProps> = ({ children, size = "medium", className }) => {
  const sizeClasses = {
    small: "px-4 py-1 text-sm",
    medium: "px-6 py-2 text-base",
    large: "px-8 py-3 text-lg",
  };

  return (
    <div>
      <button className={cn("p-[3px] relative", className)}>
        {/* Emerald Green Border */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg" />
        
        {/* Button Content */}
        <div
          className={cn(
            "rounded-[6px] relative group transition duration-200 text-black dark:text-white bg-white dark:bg-black hover:bg-transparent dark:hover:bg-transparent",
            sizeClasses[size]
          )}
        >
          {children}
        </div>
      </button>
    </div>
  );
};

export default LitupButton;
