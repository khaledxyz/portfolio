import type { ReactNode } from "react";

import NextTopLoader from "nextjs-toploader";

import { TooltipProvider } from "@/components/ui/tooltip";

import { ThemeProvider } from "@/providers/theme-provider";

interface Props {
  children: ReactNode;
}

export function Providers({ children }: Props) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
      enableSystem
    >
      <NextTopLoader color="var(--accent)" />
      <TooltipProvider>{children}</TooltipProvider>
    </ThemeProvider>
  );
}
