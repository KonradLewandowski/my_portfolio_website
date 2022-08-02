import React from "react";

import { AboutContentContainer } from "./about-content.styles";
import { ButtonPrimary } from "../../button/button.styles";

import Cards from "./cards/cards.component";

const AboutContent = () => {
  return (
    <AboutContentContainer>
      <Cards />
      <p>
        For the past year I have focused on building and expanding my skills in the field
        of web development. Front-end, back-end, data bases and external API’s are some of
        the topics I have made myself familiar with. I would gladly become a part of a
        team of developers, from whom I can learn and further expand my abilities while
        working to achieve common objectives.
      </p>

      <ButtonPrimary>
        <a href="#contact">Let's Talk</a>
      </ButtonPrimary>
    </AboutContentContainer>
  );
};

export default AboutContent;
