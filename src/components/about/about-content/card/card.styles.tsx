import styled from "styled-components";

import { variable } from "../../../variable/variable.styles";

export const CardContainer = styled.article`
  width: 200px;
  background: ${variable.color.backgoundVariant};
  border: 1px solid transparent;
  padding: ${variable.spacings["16"]};
  text-align: center;
  transition: ${variable.effect.transition};

  :hover {
    border-color: ${variable.color.white};
    background: transparent;
    cursor: default;
  }

  .icon {
    color: ${variable.color.primary};
    font-size: 1.4rem;
    margin-bottom: ${variable.spacings["16"]};
  }
  h5 {
    font-size: 0.9rem;
  }

  small {
    font-size: 0.7rem;
    color: ${variable.color.light};
  }
`;
