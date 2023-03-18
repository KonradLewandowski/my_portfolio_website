import { useContext } from "react";

import AboutContext from "../../../context/about.context";

import { AboutContentContainer } from "./about-content.styles";

import Cards from "./cards/cards.component";
import Text from "./text/text.component";

const AboutContent = () => {
  const { content } = useContext(AboutContext);

  return (
    <AboutContentContainer>
      <Cards />
      <Text text={content} />
    </AboutContentContainer>
  );
};

export default AboutContent;
