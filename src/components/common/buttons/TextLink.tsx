import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children?: React.ReactNode;
  text?: string;
  showArrow?: boolean;
  isExternal?: boolean;
  className?: string;
}

export function TextLink({
  href,
  children,
  text,
  showArrow = true,
  isExternal = false,
  className,
  ...props
}: TextLinkProps) {
  const externalProps = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  const content = children || text;

  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-1.5 font-sans text-sm font-bold uppercase tracking-wider text-brand-orange hover:text-brand-orange-hover transition-colors duration-200 underline-offset-4 hover:underline",
        className
      )}
      {...externalProps}
      {...props}
    >
      <span>{content}</span>
      {showArrow && (
        <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </Link>
  );
}
