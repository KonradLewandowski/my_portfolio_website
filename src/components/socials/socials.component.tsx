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
        <BsLinkedin className={"social-icon"}/>
      </a>
      <a
          href="https://github.com/KonradLewandowski" target="_blank" rel="noreferrer">
        <BsGithub className={"social-icon"}/>
      </a>
      <a
        href="https://nofluffjobs.com/pl/profile/NTQLZJHO?lang=en"
        target="_blank"
        rel="noreferrer"
      >
        <ImProfile className={"social-icon"}/>
      </a>
    </SocialsContainer>
  );
};
export default Socials;
