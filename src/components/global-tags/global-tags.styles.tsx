import styled from "styled-components";

import { device } from "../device/device.styles";

export const Section = styled.section`
  @media screen and (max-width: ${device.tablet}) {
    margin-top: 6rem;
  }

  @media screen and (max-width: ${device.mobile}) {
    & > h2 {
      margin-bottom: 2rem;
    }
  }
`;
