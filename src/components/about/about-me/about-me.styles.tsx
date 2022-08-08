import styled from "styled-components";

import { device } from "../../device/device.styles";

export const AboutMeContainer = styled.div`
  display: grid;
  /* place-items: center; */

  @media screen and (max-width: ${device.tablet}) {
    width: 50%;
    margin: 2rem auto 4rem;
  }

  @media screen and (max-width: ${device.mobile}) {
    width: 65%;
    margin: 0 auto 3rem;
  }
`;

export const MeImageContainer = styled.div`
  overflow: hidden;
`;
