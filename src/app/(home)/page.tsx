import { Fragment } from "react/jsx-runtime";

import { AboutSection } from "./_components/about-section";
import { CtaSection } from "./_components/cta-section";
import { HeroSection } from "./_components/hero-section";
import { ProjectsSection } from "./_components/projects-section";
import { TechnologiesSection } from "./_components/technologies-section";

export default function Page() {
  return (
    <Fragment>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TechnologiesSection />
      {/* <FeaturesSection /> */}
      <CtaSection />
    </Fragment>
  );
}
