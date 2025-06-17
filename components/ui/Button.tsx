import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => {
    const baseStyle =
      "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm  min-w-[120px] font-semibold ring-offset-background transition-all duration-300 ease-in-out cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0";

    const variants = {
      default: "bg-black text-white transition-all duration-300 ease-in-out  hover:shadow-lg",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-300 ease-in-out hover:translate-x-1 hover:shadow-md",
      secondary: "bg-[#E7FAFE] text-secondary-foreground hover:bg-secondary/80 transition-all duration-300 ease-in-out  hover:shadow-lg",
      ghost: "hover:bg-accent hover:text-accent-foreground transition-all duration-300 ease-in-out hover:translate-y-1 hover:bg-opacity-10",
      link: "text-primary underline-offset-4 hover:underline transition-all duration-300 ease-in-out hover:translate-x-2",
    };

    const sizes = {
      default: "rounded-2xl  px-5 md:px-8 h-12 md:h-[60px] md:min-w-[180px]",
      sm: "h-9 rounded-md px-3",
      lg: "rounded-2xl  px-5 md:px-8 h-12 md:h-16",
      icon: "h-12 w-12",
    };

    const classes = `${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`.trim();

    return (
      <button ref={ref} className={classes} {...props} />
    );
  }
);
