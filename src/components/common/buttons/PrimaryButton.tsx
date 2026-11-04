import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonBaseProps {
  children: React.ReactNode;
  variant?: "forest" | "sand" | "ivory";
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
  variant = "forest",
  size = "md",
  icon,
  iconPosition = "right",
  className,
  disabled,
  ...props
}: PrimaryButtonProps) {
  const sizeStyles = {
    sm: "px-4 py-2 text-xs uppercase tracking-wider",
    md: "px-6 py-3.5 text-sm uppercase tracking-widest",
    lg: "px-8 py-4 text-sm md:text-base uppercase tracking-widest",
  };

  const variantStyles = {
    forest:
      "bg-forest-green text-warm-ivory hover:bg-[#122e26] border border-forest-green shadow-sm hover:shadow-md",
    sand: "bg-warm-sand text-forest-green hover:bg-[#cfbfa4] border border-warm-sand",
    ivory: "bg-warm-ivory text-forest-green hover:bg-white border border-warm-ivory shadow-sm",
  };

  const baseStyles = cn(
    "inline-flex items-center justify-center gap-2.5 font-sans font-medium rounded-full transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-green/40 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
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
