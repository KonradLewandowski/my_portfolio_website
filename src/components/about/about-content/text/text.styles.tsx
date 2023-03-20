import styled from "styled-components";

import { variable } from "../../../../assets/variables/global.styles";
import {device} from "../../../../assets/variables/device.styles";

export const TextContainer = styled.p`
  color: ${variable.color.white};
  padding: ${variable.spacings["32"]} 0 0;

  @media  (min-width: ${device.tablet}) {
    height: 200px;
  }
  
  @media  (max-width: ${device.mobile}) {
    padding: ${variable.spacings["16"]} 0 0;
    display: none;
  }
  
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
`;
