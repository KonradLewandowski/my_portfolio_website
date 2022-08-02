import styled from "styled-components";

import { variable } from "../variable/variable.styles";

const BaseButton = styled.div`
  width: max-content;
  display: inline-block;
  padding: 0.75rem 1.2rem;
  border-radius: 0.4rem;
  cursor: pointer;
  border: 1px solid ${variable.color.primary};
  transition: ${variable.effect.transition};

  &:hover {
    background: ${variable.color.white};
    color: ${variable.color.background};
    border-color: transparent;
  }
`;

export const MainButton = styled(BaseButton)`
  & > a {
    color: ${variable.color.primary};
  }
`;

export const ButtonPrimary = styled(BaseButton)`
  & > a {
    color: ${variable.color.background};
  }
  background: ${variable.color.primary};
`;
