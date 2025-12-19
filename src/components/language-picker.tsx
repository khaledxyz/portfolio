"use client";

import Image from "next/image";

import { LanguageSquareFreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useLocale } from "next-intl";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import type { LanguageId } from "@/config/languages.config";
import { languages } from "@/config/languages.config";
import { setLanguage } from "@/i18n/set-language";

export function LanguagePicker() {
  const locale = useLocale();

  function handleLanguage(languageId: LanguageId) {
    setLanguage(languageId);
  }

  console.log(locale);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="outline">
          <HugeiconsIcon icon={LanguageSquareFreeIcons} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-30 space-y-1">
        {languages.map((language, i) => (
          <DropdownMenuItem
            className={locale === language.id ? "bg-muted" : ""}
            key={i}
            onClick={() => handleLanguage(language.id)}
          >
            <Image alt="" height={16} src={language.flag} width={16} />
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
