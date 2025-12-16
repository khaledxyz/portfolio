"use client";

import Link from "next/link";

import { useCallback, useEffect, useState } from "react";

import { Mail01FreeIcons, Time04FreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { CopyButton } from "@/components/copy-button";
import { Logo } from "@/components/logo";
import { ScrollToTopButton } from "@/components/scroll-to-top-button";
import { ThemePicker } from "@/components/theme-picker";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { socialByKey, socials } from "@/data/socials";

import { ClicksButton } from "./clicks-button";

function useAlgiersTime() {
  const [time, setTime] = useState("");

  const updateTime = useCallback(() => {
    const now = new Date();
    const algiersTime = now.toLocaleTimeString("en-US", {
      timeZone: "Africa/Algiers",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    setTime(algiersTime);
  }, []);

  useEffect(() => {
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [updateTime]);

  return time;
}

export function Footer() {
  const time = useAlgiersTime();

  return (
    <footer className="mt-auto mb-0 border-t">
      <div className="container py-6">
        <div className="flex flex-col gap-6">
          {/* Top Section */}
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col gap-2">
              <Logo />
              <p className="max-w-sm text-muted-foreground text-sm">
                Full-stack developer passionate about creating elegant solutions
                to complex problems
              </p>
            </div>

            <div className="flex items-center gap-1">
              {socials
                .filter(
                  (social) => social.name !== "Email" && social.name !== "Cal"
                )
                .map((social) => (
                  <Link
                    aria-label={social.display}
                    className={buttonVariants({
                      variant: "secondary",
                      size: "icon",
                    })}
                    href={social.value}
                    key={social.display}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <HugeiconsIcon icon={social.icon} strokeWidth={2} />
                  </Link>
                ))}
              <CopyButton
                icon={Mail01FreeIcons}
                tooltip="Copy Email"
                value={socialByKey.email.display}
                variant="secondary"
              />
              <Separator className="mx-2" orientation="vertical" />
              <ScrollToTopButton />
            </div>
          </div>

          <Separator />

          <div className="flex flex-col items-center justify-between gap-4 text-sm sm:flex-row">
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <HugeiconsIcon
                  icon={Time04FreeIcons}
                  size="16"
                  strokeWidth={2}
                />
                <span>{time} Algiers</span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <ThemePicker />
              <ClicksButton />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
