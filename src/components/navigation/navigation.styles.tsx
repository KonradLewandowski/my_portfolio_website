import styled from "styled-components";

import { variable } from "../../assets/variables/global.styles";

export const NavigationContainer = styled.div`
  background: rgba(0, 0, 0, 0.4);
  width: max-content;
  padding: ${variable.spacings["16"]} ${variable.spacings["32"]};
  z-index: 2;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: ${variable.spacings["32"]};
  display: flex;
  gap: ${variable.spacings["16"]};
  border-radius: ${variable.border.large};
  border: 1px solid ${variable.color.white};
  box-shadow: ${variable.shadow.basic} ${variable.color.primary};
  backdrop-filter: blur(15px);

  & a {
    background: transparent;
    padding: 0.8rem;
    border-radius: 50%;
    display: flex;
    color: ${variable.color.light};
    font-size: 1.2rem;

    :hover {
      background: ${variable.color.navigation};
    }

    &.active {
      background-color: ${variable.color.navigationVariant};
      color: ${variable.color.primaryVariant};
    }
  }
`;
