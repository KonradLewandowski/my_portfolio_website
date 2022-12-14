import styled from "styled-components";

import { Container } from "../container/container.styles";

import { device } from "../device/device.styles";

export const AboutContainer = styled(Container)`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 20% 60%;
  justify-content: center;
  gap: 10%;

  @media screen and (max-width: ${device.tablet}) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;
