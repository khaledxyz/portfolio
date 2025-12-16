"use client";

import {
  GibbousMoonFreeIcons,
  LaptopFreeIcons,
  Sun01FreeIcons,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemePicker() {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="outline">
          <HugeiconsIcon icon={Sun01FreeIcons} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-30 space-y-1">
        <DropdownMenuItem
          className={theme === "light" ? "bg-muted" : ""}
          onClick={() => setTheme("light")}
        >
          <HugeiconsIcon icon={Sun01FreeIcons} />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className={theme === "dark" ? "bg-muted" : ""}
          onClick={() => setTheme("dark")}
        >
          <HugeiconsIcon icon={GibbousMoonFreeIcons} />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className={theme === "system" ? "bg-muted" : ""}
          onClick={() => setTheme("system")}
        >
          <HugeiconsIcon icon={LaptopFreeIcons} />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
