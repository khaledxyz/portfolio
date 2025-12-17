import { Icon as IconifyIcon } from "@iconify/react";

export function Icon({
  icon,
  className,
  ...props
}: {
  icon: string;
  className?: string;
}) {
  return <IconifyIcon className={className} icon={icon} {...props} />;
}
