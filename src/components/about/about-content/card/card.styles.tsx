import styled from "styled-components";

import { variable } from "../../../variable/variable.styles";

export const CardContainer = styled.article`
  background: ${variable.color.backgoundVariant};
  border: 1px solid transparent;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: ${variable.effect.transition};

  &:hover {
    border-color: ${variable.color.primary};
    cursor: default;
  }

  & .icon {
    color: ${variable.color.primary};
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
  & h5 {
    font-size: 0.9rem;
  }

  & small {
    font-size: 0.7rem;
    color: ${variable.color.light};
  }
`;
