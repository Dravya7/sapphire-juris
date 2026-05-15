"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "nav" | "link";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  loading?: boolean;
  className?: string;
  children: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: [
    "relative overflow-hidden",
    "bg-[#C9A84C] text-[#0D1B2A]",
    "border border-transparent",
    "font-medium tracking-wide",
    "transition-all duration-[220ms]",
    "hover:bg-[#B8962E] hover:-translate-y-px",
    "hover:shadow-[0_4px_20px_rgba(201,168,76,0.25)]",
    "active:translate-y-0 active:bg-[#A07828]",
    "focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2",
    "focus-visible:ring-offset-[#0D1B2A]",
    "group",
  ].join(" "),

  secondary: [
    "bg-transparent text-[#C9A84C]",
    "border border-[rgba(201,168,76,0.5)]",
    "font-medium tracking-wide",
    "transition-all duration-[220ms]",
    "hover:bg-[rgba(201,168,76,0.08)] hover:border-[#C9A84C] hover:-translate-y-px",
    "active:translate-y-0",
    "focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2",
    "focus-visible:ring-offset-[#0D1B2A]",
  ].join(" "),

  ghost: [
    "bg-transparent text-[#F5F0E8]",
    "border border-[rgba(201,168,76,0.18)]",
    "font-medium tracking-wide",
    "transition-all duration-[220ms]",
    "hover:bg-white/[0.04] hover:border-[rgba(201,168,76,0.35)] hover:-translate-y-px",
    "active:translate-y-0",
  ].join(" "),

  nav: [
    "bg-transparent text-[#C9A84C]",
    "border border-[rgba(201,168,76,0.40)]",
    "font-medium tracking-wide",
    "transition-all duration-200",
    "hover:bg-[#C9A84C] hover:text-[#0D1B2A] hover:border-[#C9A84C]",
    "active:opacity-90",
  ].join(" "),

  link: [
    "bg-transparent border-none p-0",
    "text-[#C9A84C] font-medium",
    "inline-flex items-center gap-1.5",
    "transition-all duration-200",
    "hover:text-[#D4B96A] hover:gap-2.5",
    "focus-visible:underline",
    "!rounded-none",
  ].join(" "),
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "text-[0.8125rem] px-4 py-2 rounded-[6px]",
  md: "text-[0.875rem] px-6 py-3 rounded-[6px]",
  lg: "text-[0.9375rem] px-8 py-3.5 rounded-[6px]",
};

const Shimmer = () => (
  <span
    aria-hidden="true"
    className="absolute inset-0 pointer-events-none bg-[linear-gradient(105deg,transparent_40%,rgba(255,255,255,0.1)_50%,transparent_60%)] bg-[length:200%_100%] bg-[position:200%_center] group-hover:bg-[position:-200%_center] group-hover:transition-[background-position] group-hover:duration-500"
  />
);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      external = false,
      icon,
      iconRight,
      loading = false,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseClasses = cn(
      "inline-flex items-center justify-center gap-2 whitespace-nowrap",
      "select-none leading-none",
      "disabled:opacity-50 disabled:pointer-events-none",
      variantClasses[variant],
      variant !== "link" && sizeClasses[size],
      className
    );

    const content = (
      <>
        {variant === "primary" && <Shimmer />}
        {icon && <span className="shrink-0 relative z-10">{icon}</span>}
        <span className="relative z-10">{loading ? "Loading…" : children}</span>
        {iconRight && <span className="shrink-0 relative z-10">{iconRight}</span>}
      </>
    );

    if (href) {
      return (
        <Link
          href={href}
          className={baseClasses}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={baseClasses}
        disabled={disabled || loading}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

export const ArrowRight = () => (
  <svg
    aria-hidden="true"
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 7h10M7 2l5 5-5 5" />
  </svg>
);
