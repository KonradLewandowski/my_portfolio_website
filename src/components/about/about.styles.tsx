import styled from "styled-components";

import { Container } from "../container/container.styles";

import { device } from "../../assets/variables/device.styles";
import { variable } from "../../assets/variables/global.styles";

export const AboutContainer = styled(Container)`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: ${variable.gap["32"]};

  @media screen and (max-width: ${device.tablet}) {
    gap: 0;
  }
`;
