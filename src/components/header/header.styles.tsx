import styled from "styled-components";

import { Container } from "../container/container.styles";

import { device } from "../device/device.styles";

export const HeaderContainer = styled.header`
  max-height: 100vh;
  padding-top: 7rem;
  overflow: hidden;
`;

export const HeaderContainerContent = styled(Container)`
  text-align: center;
  height: 100%;
  position: relative;

  @media screen and (max-width: ${device.tablet}) {
    height: 50vh;
  }

  @media screen and (max-width: ${device.mobile}) {
    height: 100vh;
  }
`;
