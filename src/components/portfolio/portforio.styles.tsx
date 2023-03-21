import styled from "styled-components";

import {Container} from "../container/container.styles";

import {variable} from "../../assets/variables/global.styles";

export const PortfolioContainer = styled(Container)`
  text-align: center;
  padding: ${variable.spacings["16"]};
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${variable.spacings["32"]};
`;
