import styled from "styled-components";

import { device } from "../../../../assets/variables/device.styles";
import { variable } from "../../../../assets/variables/global.styles";

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${variable.gap["32"]};

  @media screen and (max-width: ${device.mobile}) {
    gap: ${variable.gap["16"]};
  }
`;
