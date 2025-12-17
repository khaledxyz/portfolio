import Image from "next/image";

import { ArrowRight01FreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
export function ProjectsSection() {
  const projects = ["", "", "", ""];

  return (
    <section className="scroll-m-20" id="projects">
      <div className="container">
        <SectionHeader
          description="A selection of my recent work and side projects"
          overline="Portfolio"
          title="Featured Projects"
        />

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((_, i) => (
            <ProjectCard key={i} />
          ))}
        </div>

        <div className="mt-5 flex items-center justify-end">
          <Button variant="secondary">
            All Projects
            <HugeiconsIcon
              className="pointer-events-none"
              icon={ArrowRight01FreeIcons}
              strokeWidth={2}
            />
          </Button>
        </div>
      </div>
    </section>
  );
}

function ProjectCard() {
  return (
    <Card className="group cursor-pointer overflow-hidden pt-0">
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          alt=""
          className="object-cover object-center transition-transform duration-700 group-hover:scale-125"
          fill
          src="/project-placeholder.jpeg"
        />
      </div>
      <CardHeader>
        <CardTitle>Snapit - URL Shortener</CardTitle>
        <CardDescription>
          Switch to the improved way to explore your data, with natural
          language. Monitoring will no longer be available on the Pro plan in
          November, 2025
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex items-center gap-1">
        <Badge variant="secondary">Next.js</Badge>
        <Badge variant="secondary">Nestjs</Badge>
        <Badge variant="secondary">Postgres</Badge>
      </CardFooter>
    </Card>
  );
}
