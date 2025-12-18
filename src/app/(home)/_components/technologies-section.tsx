import { ScrollReveal } from "@/components/scroll-reveal";
import { Icon } from "@/components/ui/icon";
import { SectionHeader } from "@/components/ui/section-header";

import { technologies } from "@/data/technologies";

export function TechnologiesSection() {
  return (
    <section className="scroll-m-20" id="technologies">
      <div className="container">
        <ScrollReveal>
          <SectionHeader
            description={"Building modern web applications with"}
            overline="Stack"
            title="Current Technologies"
          />
        </ScrollReveal>

        <ScrollReveal>
          <ul className="mt-10 flex flex-wrap gap-1">
            {technologies.map((tech, i) => (
              <li className="rounded-md bg-card p-5 hover:bg-card/80" key={i}>
                <Icon className="size-7" icon={tech.icon} />
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
