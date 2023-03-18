import styled from "styled-components";

import { device } from "../device/device.styles";
import { variable } from "../variable/variable.styles";

export const Section = styled.section`
  padding: ${variable.spacings["72"]} 0;
  /*  min-height: 100vh;*/

  & :is(h2, h5) {
    text-align: center;
    color: ${variable.color.light};
  }

  & h2 {
    color: ${variable.color.primary};
    margin-bottom: 3rem;
  }

  @media screen and (max-width: ${device.tablet}) {
    padding: ${variable.spacings["64"]} 0;
  }

  @media screen and (max-width: ${device.mobile}) {
    & > h2 {
      padding: ${variable.spacings["32"]} 0;
    }
  }
`;
