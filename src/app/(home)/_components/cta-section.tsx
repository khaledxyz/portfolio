import Image from "next/image";
import Link from "next/link";

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
        <div className="flex w-full flex-col items-center justify-between gap-8 md:flex-row">
          <div className="shrink-0 animate-float">
            <Image
              alt="Astronaut"
              className="pointer-events-none h-32 w-32 md:h-48 md:w-48 lg:h-56 lg:w-56"
              height={224}
              src="/astronaut.webp"
              width={224}
            />
          </div>

          <div className="flex flex-col items-center gap-6 md:ml-auto md:flex-row">
            <div className="text-center md:text-right">
              <p className="mb-1 font-bold text-2xl md:text-3xl">
                Ready for liftoff?
              </p>
              <p className="text-muted-foreground text-sm md:text-base">
                Start building something amazing today
              </p>
            </div>
            <Button asChild size="xl">
              <Link href="/#about">Launch Project</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
