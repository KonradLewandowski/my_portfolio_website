import styled from "styled-components";

import { device } from "../device/device.styles";
import { variable } from "../variable/variable.styles";

export const SocialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  position: absolute;
  left: 0;
  bottom: 3rem;

  &::after {
    content: "";
    width: 1px;
    height: 2rem;
    background: ${variable.color.primary};
  }
  @media screen and (max-width: ${device.mobile}) {
    display: none;
  }
`;
