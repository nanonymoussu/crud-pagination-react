import type React from "react";

interface LoadingProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Loading: React.FC<LoadingProps> = ({ size = "md", className = "" }) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };

  return (
    <div className={`flex justify-center ${className}`}>
      <div
        className={`animate-spin rounded-full border-b-2 border-blue-600 ${sizeClasses[size]}`}
      />
    </div>
  );
};

export default Loading;
