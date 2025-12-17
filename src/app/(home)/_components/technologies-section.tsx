/** biome-ignore-all lint/suspicious/noTemplateCurlyInString: <not a real template - part of the ui> */
/** biome-ignore-all lint/a11y/noNoninteractiveElementInteractions: <not needed> */
"use client";

import { useState } from "react";

import { Icon } from "@/components/ui/icon";
import { SectionHeader } from "@/components/ui/section-header";

import { technologies } from "@/data/technologies";

export function TechnologiesSection() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <section className="scroll-m-20" id="technologies">
      <div className="container">
        <SectionHeader
          description={`Building modern web applications with ${hoveredTech ? hoveredTech : "`${technology.name}`"}`}
          overline="Stack"
          title="Current Technologies"
        />

        <ul
          className="mt-10 flex flex-wrap gap-1"
          onMouseLeave={() => setHoveredTech(null)}
        >
          {technologies.map((tech, i) => (
            <li className="grid size-14" key={i}>
              <button
                className="group relative grid cursor-pointer place-items-center rounded bg-card p-1 transition-colors hover:bg-accent"
                onBlur={() => setHoveredTech(null)}
                onFocus={() => setHoveredTech(tech.name)}
                onMouseEnter={() => setHoveredTech(tech.name)}
                type="button"
              >
                {tech.useInvert ? (
                  // Single icon with filter approach
                  <Icon
                    className="size-6 brightness-0 invert transition-all duration-300 group-hover:brightness-100 group-hover:invert-0"
                    icon={tech.icon}
                  />
                ) : (
                  // Dual icon crossfade approach
                  <>
                    <Icon
                      className="size-6 transition-opacity duration-300 group-hover:opacity-0"
                      icon={tech.plainIcon}
                    />
                    <Icon
                      className="absolute inset-0 m-auto size-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      icon={tech.icon}
                    />
                  </>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
