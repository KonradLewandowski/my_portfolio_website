import styled from "styled-components";

import { variable } from "../../assets/variables/global.styles";

const BaseButton = styled.button`
  all: unset;
  display: inline-block;
  padding: ${variable.spacings["16"]} ${variable.spacings["32"]};
  cursor: pointer;
`;

export const MainButton = styled(BaseButton)`
  border: 1px solid transparent;
  transition: ${variable.effect.transition};

  :hover {
    border: 1px solid ${variable.color.white};

    a {
      color: ${variable.color.white};
    }
  }

  a {
    color: ${variable.color.primary};
    mix-blend-mode: difference;
  }
`;

export const ButtonPrimary = styled(BaseButton)`
  position: relative;
  ::before {
    transition: all 0.85s cubic-bezier(0.68, -0.55, 0.265, 1.55);

    content: "";
    width: 50%;
    height: 100%;
    background: ${variable.color.white};
    position: absolute;
    top: 0;
    left: 0;
    border-radius: ${variable.border.small};
  }

  :hover {
    ::before {
      background: ${variable.color.backgoundVariant};
      box-shadow: ${variable.shadow.basic} ${variable.color.primary};
      width: 100%;
    }
  }

  a {
    color: ${variable.color.white};
    mix-blend-mode: difference;
  }
`;
