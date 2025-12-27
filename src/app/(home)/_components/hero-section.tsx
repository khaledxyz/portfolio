import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";

export function HeroSection() {
  return (
    <section>
      <div className="container mt-10 space-y-5">
        <Badge
          asChild
          className="fade-in motion-delay-300 animate-backwards"
          variant="secondary"
        >
          <Link
            className="group"
            href="https://github.com/khaledxyz/portfolio"
            rel="noopener noreferrer"
            target="_blank"
          >
            Source code available on Github
            <Icon
              className="transition-transform group-hover:-rotate-45"
              icon="hugeicons:arrow-right-02"
              strokeWidth={2}
            />
          </Link>
        </Badge>

        <h1 className="fade-in motion-delay-350 animate-backwards font-bold text-5xl md:text-6xl">
          Engineering products that scale beyond orbit
        </h1>

        <p className="fade-in motion-delay-400 max-w-2xl animate-backwards text-muted-foreground">
          I build full-stack applications that balance performance,
          maintainability, and user experience. From scalable backend
          architecture to polished frontend interfaces, I deliver reliable
          solutions at scale.
        </p>

        <Button
          asChild
          className="fade-in motion-delay-450 animate-backwards"
          size="lg"
        >
          <Link href="#projects">
            See My Work
            <Icon icon="hugeicons:arrow-right-01" strokeWidth={2} />
          </Link>
        </Button>
      </div>
    </section>
  );
}
