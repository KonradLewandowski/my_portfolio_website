import React from "react";
import Typed from "react-typed";

import CallToAction from "./../call-to-action/call-to-action.component";
// import Me from "../me/me.component";
import Socials from "../socials/socials.component";
import ScrollDown from "../scroll-down/scroll-down.component";

import { HeaderContainerContent, HeaderContainer } from "./header.styles";
import { TextLight } from "../container/container.styles";

const Header = () => {
  return (
    <HeaderContainer id="home">
      <HeaderContainerContent>
        <h5>Hello I'm</h5>
        <h1>Konrad Lewandowski</h1>
        <TextLight>
          <h5>
            <Typed
              strings={["Frontend Developer", "Backend Developer"]}
              typeSpeed={60}
              backSpeed={40}
              backDelay={2000}
              loop
            />
          </h5>
        </TextLight>
        <CallToAction />
        <Socials />
        {/* <Me /> */}
        <ScrollDown />
      </HeaderContainerContent>
    </HeaderContainer>
  );
};

export default Header;
