import { Fragment } from "react/jsx-runtime";

import { AboutSection } from "./_components/about-section";
import { FeaturesSection } from "./_components/features-section";
import { ProjectsSection } from "./_components/projects-section";
import { TechnologiesSection } from "./_components/technologies-section";

export default function Page() {
  return (
    <Fragment>
      <AboutSection />
      <ProjectsSection />
      <TechnologiesSection />
      <FeaturesSection />
    </Fragment>
  );
}
