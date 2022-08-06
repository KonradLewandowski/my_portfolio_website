import styled from "styled-components";

import { device } from "../device/device.styles";

export const ExperienceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;

  @media screen and (max-width: ${device.tablet}) {
  }
  @media screen and (max-width: ${device.mobile}) {
  }
`;
