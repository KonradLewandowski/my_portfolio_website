import React from "react";

import { AboutContainer } from "./about.styles";
import { Section } from "../section/section.styles";

import AboutMe from "./about-me/about-me.component";
import AboutContent from "./about-content/about-content.component";

const About = () => {
  return (
    <Section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <AboutContainer>
        <AboutMe />
        <AboutContent />
      </AboutContainer>
    </Section>
  );
};

export default About;
