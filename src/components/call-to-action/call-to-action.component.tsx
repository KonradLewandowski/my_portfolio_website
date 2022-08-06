import { Link } from "react-scroll";

import CV from "../../assets/pdf/cv.pdf";

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
        <Link to="contact">Let's Talk</Link>
      </ButtonPrimary>
    </CallToActionContainer>
  );
};

export default CallToAction;
