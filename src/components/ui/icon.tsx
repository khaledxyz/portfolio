import { Icon as IconifyIcon } from "@iconify/react";

import { cn } from "@/lib/utils";

export function Icon({
  icon,
  className,
  ...props
}: {
  icon: string;
  className?: string;
}) {
  return (
    <IconifyIcon className={cn("size-5", className)} icon={icon} {...props} />
  );
}
