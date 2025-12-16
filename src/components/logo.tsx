import Link from "next/link";

import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const logoVariants = cva("", {
  variants: {
    color: {
      default: "fill-primary",
      muted: "fill-muted-foreground",
      secondary: "fill-secondary",
    },
    size: {
      sm: "h-4 w-8",
      default: "h-5 w-12",
      lg: "h-6 w-16",
    },
  },
  defaultVariants: {
    color: "default",
    size: "default",
  },
});

export interface LogoProps extends VariantProps<typeof logoVariants> {
  className?: string;
  isLink?: boolean;
  href?: string;
}

export function Logo({
  color,
  size,
  className,
  isLink,
  href = "/",
}: LogoProps) {
  const svg = (
    <svg
      className={cn(logoVariants({ color, size }), className)}
      fill="none"
      viewBox="0 0 63 23"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>logo</title>
      <path d="M62.457.073h-8.836v7.46h8.836V.073ZM62.454 22.619h-8.827c0-3.546-3.48-6.42-7.772-6.42v.008h-5.428V22.6h-9.031V0h9.031v8.908h5.428c9.168 0 16.599 6.138 16.599 13.71ZM30.232.014v22.599h-8.209v-6.428h-5.428c-4.292 0-7.772 2.877-7.772 6.422H0c0-3.979 2.05-7.56 5.33-10.066C2.05 10.035 0 6.453 0 2.474V.014h8.826v2.46c0 3.545 3.48 6.42 7.773 6.42v-.008h5.428V.014h8.209-.004Z" />
    </svg>
  );

  if (isLink) {
    return (
      <Link aria-label="logo" href={href}>
        {svg}
      </Link>
    );
  }

  return svg;
}
