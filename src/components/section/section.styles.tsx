import styled from "styled-components";

import { device } from "../device/device.styles";
import { variable } from "../variable/variable.styles";

export const Section = styled.section`
  margin-top: 8rem;
  min-height: 100vh;

  & > h2,
  & > h5 {
    text-align: center;
    color: ${variable.color.light};
  }

  & > h2 {
    color: ${variable.color.primary};
    margin-bottom: 3rem;
  }

  @media screen and (max-width: ${device.tablet}) {
    margin-top: 6rem;
  }

  @media screen and (max-width: ${device.mobile}) {
    & > h2 {
      margin-bottom: 2rem;
    }
  }
`;
