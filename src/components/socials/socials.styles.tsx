import styled from "styled-components";

import { device } from "../../assets/variables/device.styles";
import { variable } from "../../assets/variables/global.styles";

export const SocialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${variable.spacings["8"]};
  position: absolute;
  left: ${variable.spacings["32"]};
  bottom: 0;

  &::after {
    content: "";
    width: 1px;
    height: ${variable.spacings["32"]};
    background: ${variable.color.primary};
  }
  
  @media (max-width: ${device.mobile}) {
    position: relative;
    flex-direction: row;
    justify-content: center;
    left: 0;

    &::after {
      content: none;
    }
  }
`;
