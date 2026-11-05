import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonBaseProps {
  children: React.ReactNode;
  variant?: "orange" | "navy" | "forest" | "sand" | "ivory";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  disabled?: boolean;
}

export type PrimaryButtonProps = ButtonBaseProps &
  (
    | (React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
    | ({ href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>)
  );

export function PrimaryButton({
  children,
  variant = "orange",
  size = "md",
  icon,
  iconPosition = "right",
  className,
  disabled,
  ...props
}: PrimaryButtonProps) {
  const sizeStyles = {
    sm: "px-3.5 py-2 text-xs font-semibold",
    md: "px-5 py-2.5 text-sm font-semibold",
    lg: "px-7 py-3.5 text-base font-semibold",
  };

  const variantStyles = {
    orange:
      "bg-brand-orange text-white hover:bg-brand-orange-hover border border-brand-orange shadow-sm hover:shadow",
    navy: "bg-[#24110A] text-white hover:bg-[#36170D] border border-[#24110A] shadow-sm",
    forest: "bg-brand-orange text-white hover:bg-brand-orange-hover border border-brand-orange shadow-sm",
    sand: "bg-white text-charcoal hover:bg-neutral-light border border-border-light shadow-sm",
    ivory: "bg-white text-brand-orange hover:bg-brand-orange-light border border-brand-orange/30 shadow-sm",
  };

  const baseStyles = cn(
    "inline-flex items-center justify-center gap-2 font-sans rounded-md transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/50 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props as { href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <Link href={href} className={baseStyles} {...anchorProps}>
        {icon && iconPosition === "left" && <span className="transition-transform duration-200">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "right" && <span className="transition-transform duration-200">{icon}</span>}
      </Link>
    );
  }

  const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={baseStyles} disabled={disabled} {...buttonProps}>
      {icon && iconPosition === "left" && <span className="transition-transform duration-200">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="transition-transform duration-200">{icon}</span>}
    </button>
  );
}
