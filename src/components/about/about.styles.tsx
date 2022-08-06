import styled from "styled-components";

import { Container } from "../container/container.styles";

import { device } from "../device/device.styles";

export const AboutContainer = styled(Container)`
  display: grid;
  grid-template-columns: 30% 60%;
  gap: 15%;

  @media screen and (max-width: ${device.tablet}) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;
