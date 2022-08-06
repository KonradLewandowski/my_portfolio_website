import { useContext } from "react";

import AboutContext from "../../../context/about.context";

import { Link } from "react-scroll";

import { AboutContentContainer } from "./about-content.styles";
import { ButtonPrimary } from "../../button/button.styles";

import Cards from "./cards/cards.component";
import Text from "./text/text.component";

const AboutContent = () => {
  const { content } = useContext(AboutContext);

  return (
    <AboutContentContainer>
      <Cards />
      <Text text={content} />
      <ButtonPrimary>
        <Link to="contact">Let's Talk</Link>
      </ButtonPrimary>
    </AboutContentContainer>
  );
};

export default AboutContent;
