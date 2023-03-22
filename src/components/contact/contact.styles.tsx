import styled from "styled-components";

import {Container} from "../container/container.styles";

import {variable} from "../../assets/variables/global.styles";

export const ContactContainer = styled(Container)`
  margin: 0 auto;
  gap: ${variable.gap["32"]};
  padding-bottom: ${variable.spacings["72"]};
`;
