import styled from "styled-components";

import { device } from "../device/device.styles";

export const ScrollDownContainer = styled.div`
  position: absolute;
  right: -2.3rem;
  bottom: 3rem;
  transform: rotate(90deg);
  font-weight: 300;
  font-size: 0.9rem;

  @media screen and (max-width: ${device.mobile}) {
    /* display: none; */
    bottom: 40vh;
  }
`;
