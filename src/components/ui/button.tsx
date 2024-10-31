import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "default" | "outline" | "ghost" | "secondary"; // Ajout de "secondary"
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          // Styles de base
          "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium",
          "transition-colors focus-visible:outline-none focus-visible:ring-2",
          "focus-visible:ring-ring focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",

          // Variantes
          {
            // Default (Primary)
            "bg-primary text-primary-foreground hover:bg-primary/90":
              variant === "default",

            // Secondary
            "bg-secondary text-secondary-foreground hover:bg-secondary/80":
              variant === "secondary",

            // Outline
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground":
              variant === "outline",

            // Ghost
            "bg-transparent hover:bg-accent hover:text-accent-foreground":
              variant === "ghost",

            // Tailles
            "h-10 px-4 py-2": size === "default",
            "h-9 rounded-md px-3": size === "sm",
            "h-11 rounded-md px-8": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, type ButtonProps };
