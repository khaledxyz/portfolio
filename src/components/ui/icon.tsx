import { Icon as IconifyIcon } from "@iconify/react";

import { cn } from "@/lib/utils";

export function Icon({
  icon,
  className,
  strokeWidth = 2,
  ...props
}: {
  icon: string;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <IconifyIcon
      className={cn("", `[&>path]:stroke-${strokeWidth}`, className)}
      icon={icon}
      {...props}
    />
  );
}
