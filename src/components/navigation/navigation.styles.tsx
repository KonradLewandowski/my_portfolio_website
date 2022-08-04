import styled from "styled-components";

import { variable } from "../variable/variable.styles";

export const NavigationContainer = styled.div`
  background: rgba(0, 0, 0, 0.3);
  width: max-content;
  display: block;
  padding: 0.7rem 1.7rem;
  z-index: 2;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 2rem;
  display: flex;
  gap: 0.8rem;
  border-radius: 3rem;
  backdrop-filter: blur(15px);

  & a {
    background: transparent;
    padding: 0.8rem;
    border-radius: 50%;
    display: flex;
    color: ${variable.color.light};
    font-size: 1.2rem;

    &:hover {
      background: ${variable.color.navigation};
    }

    &.active {
      background-color: ${variable.color.navigationVariant};
      color: ${variable.color.primaryVariant};
    }
  }
`;
