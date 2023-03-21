import styled from "styled-components";

import {Container} from "../container/container.styles";

import { device } from "../../assets/variables/device.styles";
import {variable} from "../../assets/variables/global.styles";

export const FamiliarTechnologiesContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${variable.gap["32"]};

  @media  (max-width: ${device.lgMobile}) {
    gap: ${variable.gap["16"]};
  }
`;
