import styled from "styled-components";

import { variable } from "../../variable/variable.styles";
import { device } from "../../device/device.styles";

export const ExperienceCardContainer = styled.div`
  background: ${variable.color.backgoundVariant};
  border: 1px solid transparent;
  padding: 2.4rem 5rem;
  transition: ${variable.effect.transition};

  &:hover {
    background: transparent;
    border-color: ${variable.color.white};
  }

  & h3 {
    text-align: center;

    margin-bottom: 2rem;
  }

  & small {
    color: ${variable.color.light};
  }

  & > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-top: 0;
  }

  & article {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

  & .icon {
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
