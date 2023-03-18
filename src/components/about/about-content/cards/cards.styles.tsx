import styled from "styled-components";

import { device } from "../../../device/device.styles";
import { variable } from "../../../variable/variable.styles";

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  //grid-template-columns: repeat(3, 1fr);
  gap: ${variable.gap["32"]};

  @media screen and (max-width: ${device.mobile}) {
    //grid-template-columns: 1fr 1fr;
    gap: ${variable.gap["16"]};
  }
`;
