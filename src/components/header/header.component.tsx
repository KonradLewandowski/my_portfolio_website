import TypeWriter from "typewriter-effect";

import CallToAction from "./../call-to-action/call-to-action.component";
import Socials from "../socials/socials.component";

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
            <TypeWriter
              options={{
                autoStart: true,
                loop: true,
                delay: 60,
                strings: ["Frontend Developer", "Backend Developer"],
              }}
            />
          </h5>
        </TextLight>
        <CallToAction />
        <Socials />
      </HeaderContainerContent>
    </HeaderContainer>
  );
};

export default Header;
