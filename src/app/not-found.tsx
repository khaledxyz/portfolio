import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="relative">
      <div className="fixed inset-0 -z-10">
        <Image
          alt=""
          className="pointer-events-none object-cover opacity-5 dark:invert"
          fill
          src="/pattern.svg"
        />
      </div>

      <div className="flex items-center justify-center lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:translate-y-1/2">
        <div className="flex flex-col items-center gap-8 px-4 lg:flex-row lg:gap-16">
          <div className="shrink-0 animate-float">
            <Image
              alt="Astronaut"
              className="pointer-events-none h-32 w-32 sm:h-48 sm:w-48 lg:h-56 lg:w-56"
              height={224}
              src="/astronaut.webp"
              width={224}
            />
          </div>

          <div className="space-y-4 text-center lg:text-left">
            <h1 className="font-bold text-6xl tracking-tight sm:text-7xl lg:text-8xl">
              404
            </h1>
            <h2 className="font-semibold text-muted-foreground text-xl sm:text-2xl">
              Lost in Space
            </h2>
            <p className="max-w-md text-muted-foreground">
              The page you're looking for has drifted off into the cosmos. Let's
              get you back on track.
            </p>

            <Button asChild size="xl">
              <Link href="/">Return Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
