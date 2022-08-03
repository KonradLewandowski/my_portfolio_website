import { useContext } from "react";
import { Link } from "react-scroll";
import Typed from "react-typed";

import AboutContext from "../../../context/about.context";

import { AboutContentContainer } from "./about-content.styles";
import { ButtonPrimary } from "../../button/button.styles";

import Cards from "./cards/cards.component";

const AboutContent = () => {
  const { state } = useContext(AboutContext);

  return (
    <AboutContentContainer>
      <Cards />

      <p>
        <Typed strings={[state]} />
      </p>
      <ButtonPrimary>
        <Link to="contact">Let's Talk</Link>
      </ButtonPrimary>
    </AboutContentContainer>
  );
};

export default AboutContent;
