import Link from "next/link";

import { ArrowRight01FreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="mt-20">
      <div className="container space-y-5">
        <Badge variant="secondary">Check source code on Github!</Badge>
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
            <HugeiconsIcon icon={ArrowRight01FreeIcons} strokeWidth={2} />
          </Link>
        </Button>
      </div>
    </section>
  );
}
