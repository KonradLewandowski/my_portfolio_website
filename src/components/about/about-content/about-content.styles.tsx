import styled from "styled-components";

import { variable } from "../../variable/variable.styles";
import { device } from "../../device/device.styles";

export const AboutContentContainer = styled.div`
  text-align: center;
  /*  @media screen and (max-width: ${device.mobile}) {
    text-align: center;
  }*/
  p {
    padding: ${variable.spacings["32"]} 0;
    color: ${variable.color.light};

    @media screen and (max-width: ${device.tablet}) {
      margin: ${variable.spacings["16"]} 0;
    }

    /*  @media screen and (max-width: ${device.mobile}) {
      margin: 1.5rem 0;
    }*/
  }
`;
