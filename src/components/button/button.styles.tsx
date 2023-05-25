import styled, { css } from "styled-components";

import { variable } from "../../assets/variables/global.styles";
import { device } from "../../assets/variables/device.styles";

interface ButtonProps {
  submit?: boolean;
}

const BaseButton = styled.button`
  all: unset;
  display: inline-block;
  padding: ${variable.spacings["16"]} ${variable.spacings["32"]};
  border-radius: ${variable.border.small};
  cursor: pointer;
  height: fit-content;

  &:before {
    border-radius: ${variable.border.small};
  }

  a {
    white-space: nowrap;
  }
  @media (max-width: ${device.tablet}) {
    padding: ${variable.spacings["14"]} ${variable.spacings["18"]};
  }
`;

export const MainButton = styled(BaseButton)`
  border: 1px solid transparent;
  transition: ${variable.effect.transition};

  :hover {
    border: 1px solid ${variable.color.white};
    box-shadow: ${variable.shadow.basic} ${variable.color.white},
      inset ${variable.shadow.basic} ${variable.color.white};

    a {
      color: ${variable.color.white};
    }
  }

  a {
    color: ${variable.color.primary};
    mix-blend-mode: difference;
  }
`;

export const ButtonPrimary = styled(BaseButton)<ButtonProps>`
  position: relative;
  ${(props) =>
    props.submit &&
    css`
      max-width: 140px;
    `}
  ::before {
    transition: all 0.85s cubic-bezier(0.68, -0.55, 0.265, 1.55);

    content: "";
    width: 50%;
    height: 100%;
    background: ${variable.color.white};
    position: absolute;
    top: 0;
    left: 0;
  }

  :hover {
    ::before {
      background: ${variable.color.backgroundVariant};
      box-shadow: ${variable.shadow.basic} ${variable.color.primary};
      width: 100%;
    }
  }

  a {
    color: ${variable.color.white};
    mix-blend-mode: difference;
  }
`;
