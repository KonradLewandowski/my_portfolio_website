import styled from "styled-components";

import { Container } from "../container/container.styles";

import { device } from "../device/device.styles";
import { variable } from "../variable/variable.styles";

export const AboutContainer = styled(Container)`
  width: ${variable.container["700"]};
  margin: 0 auto;
  display: flex;
  //grid-template-columns: 20% 60%;
  justify-content: center;
  gap: ${variable.gap["32"]};

  @media screen and (max-width: ${device.tablet}) {
    //grid-template-columns: 1fr;
    gap: 0;
  }
`;
