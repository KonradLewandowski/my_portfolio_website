import { BsLinkedin, BsGithub } from "react-icons/bs";
import { ImProfile } from "react-icons/im";

import { SocialsContainer } from "./socials.styles";

export const Socials = () => {
  return (
    <SocialsContainer>
      <a
        href="https://www.linkedin.com/in/konrad-lewandowski-209b75230/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/KonradLewandowski" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a
        href="https://nofluffjobs.com/pl/profile/NTQLZJHO?lang=en"
        target="_blank"
        rel="noreferrer"
      >
        <ImProfile />
      </a>
    </SocialsContainer>
  );
};
export default Socials;
