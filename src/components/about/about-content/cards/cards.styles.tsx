import styled from "styled-components";

import { device } from "../../../device/device.styles";

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media screen and (max-width: ${device.mobile}) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`;
