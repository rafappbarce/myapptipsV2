import * as React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "elevated";
  hover?: boolean;
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  padded?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", variant = "default", hover = false, ...props }, ref) => (
    <div
      ref={ref}
      className={`
        rounded-lg border bg-card text-card-foreground
        transition-all duration-200
        ${variant === "default" && "border-border shadow-sm"}
        ${variant === "outline" && "border-2 border-border"}
        ${variant === "elevated" && "shadow-md border-transparent"}
        ${hover && "hover:shadow-lg hover:-translate-y-0.5"}
        ${className}
      `}
      {...props}
    />
  ),
);
Card.displayName = "Card";

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className = "", padded = true, ...props }, ref) => (
    <div
      ref={ref}
      className={`
        ${padded ? "p-6" : ""}
        ${className}
      `}
      {...props}
    />
  ),
);
CardContent.displayName = "CardContent";

export { Card, CardContent };
