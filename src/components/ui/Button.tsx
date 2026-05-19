import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "nav" | "ghost";

interface LinkButtonProps {
  href: string;
  target?: "_blank" | "_self";
  rel?: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

interface ActionButtonProps {
  href?: never;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

type ButtonProps = LinkButtonProps | ActionButtonProps;

const variantClass: Record<Variant, string> = {
  primary:   "btn-primary",
  secondary: "btn-secondary",
  nav:       "btn-nav",
  ghost:     "btn-link",
};

export function Button(props: ButtonProps) {
  const { variant = "primary", className, children } = props;
  const cls = cn(variantClass[variant], className);

  if (props.href !== undefined) {
    return (
      <Link href={props.href} target={props.target} rel={props.rel} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      disabled={props.disabled}
      onClick={props.onClick}
      className={cls}
    >
      {children}
    </button>
  );
}
