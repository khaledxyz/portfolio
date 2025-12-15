import { SectionHeader } from "@/components/ui/section-header";

export function FeaturesSection() {
  return (
    <section>
      <div className="container">
        <SectionHeader
          description="Full-stack development with a focus on performance, accessibility, and developer experience"
          overline="Expertise"
          title="What I Build"
        />

        <div className="mt-10">content</div>
      </div>
    </section>
  );
}
