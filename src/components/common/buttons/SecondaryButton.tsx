import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SecondaryButtonBaseProps {
  children: React.ReactNode;
  variant?: "outline-forest" | "outline-ivory" | "ghost";
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
  variant = "outline-forest",
  size = "md",
  icon,
  iconPosition = "right",
  className,
  disabled,
  ...props
}: SecondaryButtonProps) {
  const sizeStyles = {
    sm: "px-4 py-2 text-xs uppercase tracking-wider",
    md: "px-6 py-3.5 text-sm uppercase tracking-widest",
    lg: "px-8 py-4 text-sm md:text-base uppercase tracking-widest",
  };

  const variantStyles = {
    "outline-forest":
      "border border-forest-green/40 text-forest-green hover:border-forest-green hover:bg-forest-green/5 bg-transparent",
    "outline-ivory":
      "border border-warm-ivory/50 text-warm-ivory hover:border-warm-ivory hover:bg-warm-ivory/10 bg-transparent",
    ghost:
      "text-forest-green hover:bg-forest-green/5 border border-transparent bg-transparent",
  };

  const baseStyles = cn(
    "inline-flex items-center justify-center gap-2 font-sans font-medium rounded-full transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-green/30 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
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
