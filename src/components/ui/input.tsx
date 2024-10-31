import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // Ajout d'une prop variant pour différents styles
  variant?: "default" | "outline" | "ghost";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", variant = "default", type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={`
          flex h-10 w-full rounded-lg border border-input bg-background px-4 py-2
          text-sm ring-offset-background transition-colors duration-200
          file:border-0 file:bg-transparent file:text-sm file:font-medium
          placeholder:text-muted-foreground
          focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-ring focus-visible:ring-offset-2
          disabled:cursor-not-allowed disabled:opacity-50
          ${variant === "outline" ? "border-2" : ""}
          ${variant === "ghost" ? "border-transparent bg-background/50" : ""}
          hover:border-primary/50
          ${className}
        `}
        ref={ref}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export { Input };