import styled from "styled-components";

import { variable } from "../../variable/variable.styles";
import { device } from "../../device/device.styles";

export const ExperienceCardContainer = styled.div`
  min-height: 370px;
  background: ${variable.color.backgoundVariant};
  border: 1px solid transparent;
  padding: 2.4rem 5rem;
  transition: ${variable.effect.transition};

  :hover {
    background: transparent;
    border-color: ${variable.color.white};
  }

  h3 {
    text-align: center;
    margin-bottom: 2rem;
  }

  small {
    color: ${variable.color.light};
  }

  > div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin-top: 0;
  }

  article {
    /* margin-left: 1rem; */
    display: grid;
    grid-template-columns: 10% 60%;
    gap: 1rem;
    justify-content: end;
  }

  .icon {
    margin-top: 6px;
    color: ${variable.color.primary};
  }

  @media screen and (max-width: ${device.tablet}) {
    min-width: 66vw;
  }
  @media screen and (max-width: ${device.mobile}) {
    padding: 2.5rem;
  }
`;
