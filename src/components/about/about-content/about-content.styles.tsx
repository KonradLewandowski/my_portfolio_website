import styled from "styled-components";

import { variable } from "../../variable/variable.styles";
import { device } from "../../device/device.styles";

export const AboutContentContainer = styled.div`
  @media screen and (max-width: ${device.mobile}) {
    text-align: center;
  }
  p {
    margin: 2rem 0 2.6rem;
    color: ${variable.color.light};

    @media screen and (max-width: ${device.tablet}) {
      margin: 1rem 0 1.5rem;
    }

    @media screen and (max-width: ${device.mobile}) {
      margin: 1.5rem 0;
    }
  }
`;
