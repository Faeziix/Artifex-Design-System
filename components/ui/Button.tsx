import React from "react";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/utils";

export type ButtonProps = VariantProps<typeof buttonVarient> &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    block?: boolean;
  };

const buttonVarient = cva(
  ["font-bold", "transition-all", "focus:ring-1", "focus:ring-black", "border"],
  {
    variants: {
      color: {
        default: [
          "bg-transparent",
          "text-primary",
          "border-primary",
          "hover:bg-primary",
          "hover:bg-opacity-10",
          "focus:outline-none",
          "active:bg-primary",
          "active:bg-opacity-20",
        ],
        primary: [
          "bg-primary",
          "text-white",
          "border-primary",
          "hover:bg-primary-hover",
          "hover:border-primary-hover",
          "hover:text-white",
          "focus:outline-none",
          "active:bg-primary-active",
        ],
        accent: [
          "bg-accent",
          "border-accent",
          "hover:bg-accent-hover",
          "hover:border-accent-hover",
          "focus:outline-none",
          "active:bg-accent-active",
        ],
        disabled: [
          "bg-gray-300",
          "text-gray-500",
          "border-gray-300",
          "cursor-not-allowed",
          "hover:bg-none",
          "hover:border-initial",
          "hover:text-none",
        ],
      },
      size: {
        sm: ["text-sm", "py-2", "px-6"],
        md: ["text-base", "py-3", "px-9"],
        lg: ["text-lg", "py-4", "px-12"],
        xl: ["text-xl", "py-6", "px-[4.5rem]"],
      },
      mode: {
        default: [""],
        outlined: ["bg-transparent"],
      },
      radius: {
        default: ["rounded-2xl"],
        circle: ["rounded-full"],
        sm: ["rounded-sm"],
        md: ["rounded-md"],
        lg: ["rounded-lg"],
        xl: ["rounded-xl"],
        "2xl": ["rounded-2xl"],
        "3xl": ["rounded-3xl"],
      },
    },
    compoundVariants: [
      {
        color: "accent",
        mode: "outlined",
        className: "text-accent",
      },
      {
        color: "primary",
        mode: "outlined",
        className: "text-primary",
      },
    ],
    defaultVariants: {
      color: "default",
      size: "md",
      mode: "default",
      radius: "default",
    },
  }
);

function Button({
  children,
  className,
  color,
  size,
  mode,
  radius,
  block,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        buttonVarient({ color, size, mode, radius }),
        block && "w-full",
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
