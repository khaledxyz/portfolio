"use client";

import { useState } from "react";

import { Copy01FreeIcons, Tick02FreeIcons } from "@hugeicons/core-free-icons";
import type { IconSvgElement } from "@hugeicons/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { useCopyToClipboard } from "usehooks-ts";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { cn } from "@/lib/utils";

import type { buttonVariants } from "./ui/button";
import { Button } from "./ui/button";

interface Props {
  value: string;
  icon?: IconSvgElement;
  tooltip?: string;
  size?: NonNullable<Parameters<typeof buttonVariants>[0]>["size"];
  variant?: NonNullable<Parameters<typeof buttonVariants>[0]>["variant"];
  timeout?: number;
  className?: string;
}

export function CopyButton({
  value,
  icon = Copy01FreeIcons,
  tooltip,
  size = "icon",
  variant = "outline",
  timeout = 1500,
  className,
}: Props) {
  const [, copy] = useCopyToClipboard();
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    await copy(value);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), timeout);
  };

  const content = (
    <Button
      className={cn("relative", className)}
      onClick={handleCopy}
      size={size}
      variant={variant}
    >
      {/* default icon */}
      <span
        className={cn(
          "transition-opacity duration-150",
          isCopied ? "opacity-0" : "opacity-100"
        )}
      >
        <HugeiconsIcon icon={icon} strokeWidth={2} />
      </span>

      {/* success icon */}
      <span
        className={cn(
          "absolute inset-0 flex items-center justify-center transition-opacity duration-150",
          isCopied ? "opacity-100" : "opacity-0"
        )}
      >
        <HugeiconsIcon icon={Tick02FreeIcons} strokeWidth={2} />
      </span>
    </Button>
  );

  if (!tooltip) {
    return content;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{content}</TooltipTrigger>
      <TooltipContent>{tooltip}</TooltipContent>
    </Tooltip>
  );
}
