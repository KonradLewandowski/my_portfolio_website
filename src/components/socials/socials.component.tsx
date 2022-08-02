import React from "react";

import { BsLinkedin, BsGithub } from "react-icons/bs";
import { ImProfile } from "react-icons/im";

import { SocialsContainer } from "./socials.styles";

export const Socials = () => {
  return (
    <SocialsContainer>
      <a href="https://linkedin.com" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://nofluffjobs.com/" target="_blank" rel="noreferrer">
        <ImProfile />
      </a>
    </SocialsContainer>
  );
};
export default Socials;
