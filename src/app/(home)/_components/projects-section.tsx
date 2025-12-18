import Image from "next/image";
import Link from "next/link";

import { ArrowRight01FreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { ScrollReveal } from "@/components/scroll-reveal";
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

import type { ProjectMetadata } from "@/lib/projects";
import { getAllProjects } from "@/lib/projects";

export function ProjectsSection() {
  const projects = getAllProjects();

  return (
    <section className="scroll-m-20" id="projects">
      <div className="container">
        <ScrollReveal>
          <SectionHeader
            description="A selection of my recent work and side projects"
            overline="Portfolio"
            title="Featured Projects"
          />
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard delay={i * 100} key={i} project={project} />
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

function ProjectCard({
  project,
  delay,
}: {
  project: ProjectMetadata;
  delay?: number;
}) {
  return (
    <ScrollReveal delay={delay}>
      <Link href={`projects/${project.slug}#top`}>
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
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardFooter className="flex flex-wrap items-center gap-1">
            {Array.isArray(project.tags) &&
              project.tags.length > 0 &&
              project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
          </CardFooter>
        </Card>
      </Link>
    </ScrollReveal>
  );
}
