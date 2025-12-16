import { HugeiconsIcon } from "@hugeicons/react";

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import { SectionHeader } from "@/components/ui/section-header";

import { technologies } from "@/data/technologies";

export function TechnologiesSection() {
  return (
    <section className="scroll-m-20" id="technologies">
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
