import ME from "../../../assets/images/me-about.jpg";

import { AboutMeContainer, MeImageContainer } from "./about-me.styles";

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <MeImageContainer>
        <img src={ME} alt="me" />
      </MeImageContainer>
    </AboutMeContainer>
  );
};

export default AboutMe;
