import Image from "next/image";
import Link from "next/link";

import { HugeiconsIcon } from "@hugeicons/react";

import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";

import { socials } from "@/data/socials";

export function AboutSection() {
  return (
    <section className="scroll-m-20" id="about">
      <div className="container">
        <SectionHeader
          className="fade-in motion-delay-500"
          description="FullStack Web Developer"
          overline="About"
          title="Khaled"
        />

        <div className="mt-10 grid gap-12 md:grid-cols-[200px_1fr]">
          <div className="fade-in motion-delay-550 flex justify-center md:justify-start">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted">
              <Image
                alt=""
                className="object-cover"
                fill
                src="/portrait.webp"
              />
            </div>
          </div>

          {/* Content */}
          <div className="fade-in motion-delay-600 space-y-8">
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I specialize in crafting full-stack applications that prioritize
                performance, maintainability, and user experience. My approach
                combines technical precision with thoughtful design decisions.
              </p>

              <p>
                From architecting scalable backend systems to building polished
                frontend interfaces, I focus on shipping solutions that work
                reliably at scale.
              </p>
            </div>

            <div className="space-y-6">
              {/* Location & Languages */}
              <div className="flex flex-wrap gap-x-8 gap-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 font-medium text-muted-foreground text-sm uppercase tracking-wider">
                    Location
                  </div>
                  <div className="text-foreground">Algiers, Algeria</div>
                </div>

                <div className="space-y-2">
                  <div className="font-medium text-muted-foreground text-sm uppercase tracking-wider">
                    Languages
                  </div>
                  <div className="text-foreground">Arabic, English</div>
                </div>
              </div>

              {/* Links */}
              <div className="space-y-3">
                <div className="font-medium text-muted-foreground text-sm uppercase tracking-wider">
                  Connect
                </div>
                <div className="flex flex-wrap gap-2">
                  {socials.map((social) => (
                    <Button asChild key={social.name} variant="secondary">
                      <Link
                        href={social.value}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <HugeiconsIcon
                          className="pointer-events-none"
                          icon={social.icon}
                          strokeWidth={2}
                        />
                        {social.name}
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
