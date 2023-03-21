import { AboutContainer } from "./about.styles";
import { Section } from "../section/section.styles";

import AboutContent from "./about-content/about-content.component";

const About = () => {
  return (
    <Section id="about">
      <p className={'before-title'}>Get To Know</p>
      <h2>About Me</h2>
      <AboutContainer>
        <AboutContent />
      </AboutContainer>
    </Section>
  );
};

export default About;
