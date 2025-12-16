"use client";

import Image from "next/image";

import { LanguageSquareFreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  {
    label: "العربية",
    flag: "/flags/dz.svg",
  },
  {
    label: "English",
    flag: "/flags/usa.svg",
  },
  {
    label: "Francais",
    flag: "/flags/fr.svg",
  },
];

export function LanguagePicker() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="outline">
          <HugeiconsIcon icon={LanguageSquareFreeIcons} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-30 space-y-1">
        {languages.map((language, i) => (
          <DropdownMenuItem key={i}>
            <Image alt="" height={16} src={language.flag} width={16} />
            {language.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
