import styled from "styled-components";

import { variable } from "../../variable/variable.styles";
import { device } from "../../device/device.styles";

export const AboutMeContainer = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  /* border-radius: 2rem; */
  background: linear-gradient(45deg, transparent, ${variable.color.primary}, transparent);
  display: grid;
  place-items: center;

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
  /* border-radius: 2rem; */
  overflow: hidden;
  transform: rotate(10deg);
  transition: ${variable.effect.transition};

  &:hover {
    transform: rotate(0);
  }
`;
