import {
  CodeFreeIcons,
  GitBranchFreeIcons,
  Rocket01FreeIcons,
  TickDouble01FreeIcons,
  ZapFreeIcons,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function CicdPipelineIllustration() {
  const stages = [
    { icon: CodeFreeIcons, label: "Code" },
    { icon: GitBranchFreeIcons, label: "Commit" },
    { icon: ZapFreeIcons, label: "Build" },
    { icon: TickDouble01FreeIcons, label: "Test" },
    { icon: Rocket01FreeIcons, label: "Deploy" },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-background">
      <div className="relative flex items-center gap-5">
        {stages.map((stage, i) => (
          <div className="relative flex flex-col items-center gap-2" key={i}>
            <div className="flex size-10 items-center justify-center rounded-lg border bg-card shadow-sm">
              <HugeiconsIcon
                className="size-5 text-foreground/70"
                icon={stage.icon}
              />
            </div>
            <span className="font-medium text-muted-foreground">
              {stage.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
