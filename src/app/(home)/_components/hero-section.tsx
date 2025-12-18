import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";

export function HeroSection() {
  return (
    <section className="mt-20">
      <div className="container space-y-5">
        <Badge asChild variant="secondary">
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
        <h1 className="font-bold text-5xl md:text-6xl">
          Engineering products that scale beyond orbit
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga impedit
          nam voluptate fugiat maiores autem esse. Commodi, ratione aliquam.
          Perferendis?
        </p>
        <Button asChild size="lg">
          <Link href="#projects">
            See My Work
            <Icon icon="hugeicons:arrow-right-01" strokeWidth={2} />
          </Link>
        </Button>
      </div>
    </section>
  );
}
