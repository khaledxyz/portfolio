"use client";

import Link from "next/link";

import { Menu01FreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Logo } from "@/components/logo";
import { ThemePicker } from "@/components/theme-picker";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

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
          <Logo href="/#top" isLink />

          {/* Desktop Navigation */}
          <ul className="hidden md:flex">
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

          {/* Mobile Navigation Drawer */}
          <Drawer>
            <DrawerTrigger asChild>
              <Button className="md:hidden" size="icon" variant="outline">
                <HugeiconsIcon icon={Menu01FreeIcons} strokeWidth={2} />
                <span className="sr-only">Open menu</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Navigation</DrawerTitle>
              </DrawerHeader>
              <div className="px-4 pb-6">
                <nav className="flex flex-col space-y-2">
                  {links.map((link, i) => (
                    <DrawerClose asChild key={i}>
                      <Button
                        asChild
                        className="justify-start"
                        size="xl"
                        variant="ghost"
                      >
                        <Link href={link.href}>{link.label}</Link>
                      </Button>
                    </DrawerClose>
                  ))}
                </nav>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </nav>
  );
}
