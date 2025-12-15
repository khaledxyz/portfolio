import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  overline?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  overline,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("space-y-3", className)}>
      {overline ? (
        <div className="font-medium text-muted-foreground text-sm uppercase tracking-wider">
          {overline}
        </div>
      ) : null}

      <div className="space-y-2">
        <h2 className="font-bold text-3xl tracking-tight md:text-4xl">
          {title}
        </h2>

        {description ? (
          <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        ) : null}
      </div>

      <div className="h-px w-16 bg-border" />
    </div>
  );
}
