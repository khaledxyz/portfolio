import {
  Desk01FreeIcons,
  Gif01FreeIcons,
  News01FreeIcons,
  ReactFreeIcons,
  TailwindcssFreeIcons,
  Typescript01FreeIcons,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import { SectionHeader } from "@/components/ui/section-header";

export const technologies = [
  {
    name: "TypeScript",
    description: "JavaScript but better",
    icon: Typescript01FreeIcons,
  },
  {
    name: "NestJS",
    description: "Node framework",
    icon: News01FreeIcons,
  },
  {
    name: "Next.js",
    description: "React framework",
    icon: ReactFreeIcons,
  },
  {
    name: "Postgres",
    description: "SQL database",
    icon: Desk01FreeIcons,
  },
  {
    name: "Tailwind",
    description: "CSS framework",
    icon: TailwindcssFreeIcons,
  },
  {
    name: "Docker",
    description: "Containerization tool",
    icon: Gif01FreeIcons,
  },
  {
    name: "Git",
    description: "Version control",
    icon: Gif01FreeIcons,
  },
  {
    name: "React",
    description: "UI library",
    icon: ReactFreeIcons,
  },
  {
    name: "Node.js",
    description: "JS runtime",
    icon: Desk01FreeIcons,
  },
];

export function TechnologiesSection() {
  return (
    <section>
      <div className="container">
        <SectionHeader
          description="A list of technologies I use for my work"
          overline="Stack"
          title="Current Technologies"
        />

        <div className="mt-10 grid grid-cols-3 gap-2">
          {technologies.map((tech, i) => (
            <Item key={i} variant="muted">
              <div className="grid size-10 place-items-center rounded-md bg-secondary">
                <HugeiconsIcon icon={tech.icon} />
              </div>
              <ItemContent>
                <ItemTitle>{tech.name}</ItemTitle>
                <ItemDescription>{tech.description}</ItemDescription>
              </ItemContent>
            </Item>
          ))}
        </div>
      </div>
    </section>
  );
}
