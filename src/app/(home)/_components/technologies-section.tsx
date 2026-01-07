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
        <ul className="mt-10 grid grid-cols-[repeat(auto-fill,minmax(4rem,1fr))] gap-1">
          {technologies.map((tech, i) => (
            <ScrollReveal delay={i * 50} key={i}>
              <li className="flex items-center justify-center rounded-md bg-card p-5 hover:bg-card/80">
                <Icon className="size-7" icon={tech.icon} />
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
