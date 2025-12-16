import Link from "next/link";

import { Logo } from "@/components/logo";
import { ThemePicker } from "@/components/theme-picker";
import { Button } from "@/components/ui/button";

import { links } from "@/config/links.config";

import { LanguagePicker } from "./language-picker";

export function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 w-full border-border/40 border-b bg-background/80 backdrop-blur-sm"
      id="top"
    >
      <div className="container flex items-center justify-between py-3">
        <div className="flex items-center space-x-5">
          <Logo href="#top" isLink />
          <ul>
            {links.map((link, i) => (
              <Button asChild key={i} variant="ghost">
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-1">
          <LanguagePicker />
          <ThemePicker />
        </div>
      </div>
    </nav>
  );
}
