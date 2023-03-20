import styled from "styled-components";

import {variable} from "../../assets/variables/global.styles";
import {device} from "../../assets/variables/device.styles";

export const CallToActionContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${variable.gap["32"]};
  padding: ${variable.spacings["32"]} 0;

  @media (max-width: ${device.mobile}) {
    padding: ${variable.spacings["16"]} 0;
  }
`;
