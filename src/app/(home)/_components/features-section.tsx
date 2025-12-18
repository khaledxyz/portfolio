import { ScrollReveal } from "@/components/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";

import { features } from "@/data/features";

export function FeaturesSection() {
  return (
    <section className="scroll-m-20" id="features">
      <div className="container">
        <ScrollReveal>
          <SectionHeader
            description="Full-stack development with a focus on performance, accessibility, and developer experience"
            overline="Expertise"
            title="What I Build"
          />
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {features.map((feature, i) => (
            <FeatureCard delay={i * 100} feature={feature} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
  delay,
}: {
  feature: (typeof features)[number];
  delay: number;
}) {
  return (
    <ScrollReveal delay={delay}>
      <Card className="pt-0">
        <div className="relative h-52 w-full overflow-hidden">
          <feature.illustration />
        </div>
        <CardHeader>
          <CardTitle>{feature.title}</CardTitle>
          <CardDescription>{feature.description}</CardDescription>
        </CardHeader>
        <CardFooter className="flex items-center gap-1">
          {feature.tags.map((tag, i) => (
            <Badge key={i} variant="secondary">
              {tag}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </ScrollReveal>
  );
}
