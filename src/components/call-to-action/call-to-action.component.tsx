import React from "react";
import CV from "../../assets/cv.pdf";

import { CallToActionContainer } from "./call-to-action.styles";
import { MainButton, ButtonPrimary } from "../button/button.styles";

const CallToAction = () => {
  return (
    <CallToActionContainer>
      <MainButton>
        <a href={CV} download>
          Download CV
        </a>
      </MainButton>
      <ButtonPrimary>
        <a href="contact">Let's Talk</a>
      </ButtonPrimary>
    </CallToActionContainer>
  );
};

export default CallToAction;
