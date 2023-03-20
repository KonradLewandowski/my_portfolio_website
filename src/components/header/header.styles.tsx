import styled from "styled-components";

import { Container } from "../container/container.styles";

import {variable} from "../../assets/variables/global.styles";

export const HeaderContainer = styled.header`
  padding-top: ${variable.spacings["96"]};
  overflow: hidden;
`;

export const HeaderContainerContent = styled(Container)`
  text-align: center;
  position: relative;
  padding-bottom: ${variable.spacings["16"]};
`;
