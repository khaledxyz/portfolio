import Image from "next/image";

import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <div className="relative mb-0 h-96 w-full overflow-hidden">
      <Image
        alt=""
        className="pointer-events-none object-cover opacity-10 dark:invert"
        fill
        src="/pattern.svg"
      />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-background via-background/50 to-transparent" />

      <div className="container relative flex h-full items-center">
        <div className="flex w-full flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="shrink-0 animate-float">
            <Image
              alt="Astronaut"
              className="pointer-events-none h-32 w-32 sm:h-48 sm:w-48 lg:h-56 lg:w-56"
              height={224}
              src="/astronaut.svg"
              width={224}
            />
          </div>

          <div className="flex flex-col items-center gap-6 sm:ml-auto sm:flex-row">
            <div className="text-center sm:text-right">
              <p className="mb-1 font-bold text-2xl sm:text-3xl">
                Ready for liftoff?
              </p>
              <p className="text-muted-foreground text-sm sm:text-base">
                Start building something amazing today
              </p>
            </div>
            <Button size="xl">Launch Project</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
