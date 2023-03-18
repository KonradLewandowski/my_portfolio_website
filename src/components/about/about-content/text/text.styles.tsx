import styled from "styled-components";

import { variable } from "../../../variable/variable.styles";
import { device } from "../../../device/device.styles";

export const TextContainer = styled.p`
  min-height: 200px;
  @keyframes cursor-blink {
    50% {
      opacity: 0;
    }
  }
  /* Animation blink */
  :after {
    content: " ";
    padding: 1px;
    border-right: 4px solid ${variable.color.primary};
    font-weight: 700;
    animation: cursor-blink 1.1s linear infinite;
  }
  /*
  @media screen and (max-width: ${device.tablet}) {
    min-height: 200px;
  }

  @media screen and (max-width: ${device.mobile}) {
    min-height: 200px;
  }*/
`;
