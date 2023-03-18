import { AboutContainer } from "./about.styles";
import { Section } from "../section/section.styles";

import AboutContent from "./about-content/about-content.component";

const About = () => {
  return (
    <Section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <AboutContainer>
        <AboutContent />
      </AboutContainer>
    </Section>
  );
};

export default About;
