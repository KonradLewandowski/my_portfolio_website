import styled from "styled-components";

import { device } from "../../assets/variables/device.styles";
import { variable } from "../../assets/variables/global.styles";

export const Section = styled.section`
  margin: 0 auto;
  padding: ${variable.spacings["48"]} 0;
  text-align: center;

  .before-title {
    text-shadow: 0 0 10px 2px white;
    font-size: ${variable.fontSize["16"]};
    color: ${variable.color.light};
  }

  h2 {
    color: ${variable.color.primary};
    padding: ${variable.spacings["32"]} 0;
  }

  @media screen and (max-width: ${device.tablet}) {
    padding: ${variable.spacings["32"]} 0;
  }
`;
