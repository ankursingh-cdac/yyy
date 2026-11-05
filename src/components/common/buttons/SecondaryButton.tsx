import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SecondaryButtonBaseProps {
  children: React.ReactNode;
  variant?: "outline-navy" | "outline-orange" | "outline-white" | "outline-forest" | "outline-ivory" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  disabled?: boolean;
}

export type SecondaryButtonProps = SecondaryButtonBaseProps &
  (
    | (React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
    | ({ href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>)
  );

export function SecondaryButton({
  children,
  variant = "outline-navy",
  size = "md",
  icon,
  iconPosition = "right",
  className,
  disabled,
  ...props
}: SecondaryButtonProps) {
  const sizeStyles = {
    sm: "px-3.5 py-2 text-xs font-semibold",
    md: "px-5 py-2.5 text-sm font-semibold",
    lg: "px-7 py-3.5 text-base font-semibold",
  };

  const variantStyles = {
    "outline-navy":
      "border border-border-light text-charcoal hover:border-brand-orange hover:text-brand-orange hover:bg-brand-orange-light/30 bg-white shadow-2xs",
    "outline-orange":
      "border border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white bg-transparent",
    "outline-white":
      "border border-white/60 text-white hover:border-white hover:bg-white/10 bg-transparent",
    "outline-forest":
      "border border-border-light text-charcoal hover:border-brand-orange hover:text-brand-orange bg-white",
    "outline-ivory":
      "border border-white/60 text-white hover:border-white hover:bg-white/10 bg-transparent",
    ghost:
      "text-charcoal hover:text-brand-orange hover:bg-neutral-light border border-transparent bg-transparent",
  };

  const baseStyles = cn(
    "inline-flex items-center justify-center gap-2 font-sans rounded-md transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props as { href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <Link href={href} className={baseStyles} {...anchorProps}>
        {icon && iconPosition === "left" && <span>{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "right" && <span>{icon}</span>}
      </Link>
    );
  }

  const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={baseStyles} disabled={disabled} {...buttonProps}>
      {icon && iconPosition === "left" && <span>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </button>
  );
}
